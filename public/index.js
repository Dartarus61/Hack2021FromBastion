class TypeComponent {
    static getTemplate(name) {
        return `
            <svg id="spinner" class="animate-spin h-3 w-3 absolute top-2 right-2 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p class="cursor-default text-gray-800">${name}</p>
            <div id='chartPlaceholder'></div>
        `
    }
    static render(name) {
        const component = document.createElement('div')
        component.className = 'bg-white p-5 rounded shadow mx-6 w-full relative h-96'
        component.innerHTML = this.getTemplate(name)
        const list = document.getElementById('dashboards')
        list.insertBefore(component, list.firstChild)
        return component
    }
}

const fetchURI = (uri) => new Promise((resolve) => fetch(uri).then((res) => resolve(res.json())))
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

document.body.onload = async function () {
    const types = await fetchURI('/types')
    if (types.length) {
        for (const type of types) {
            const metricComponent = TypeComponent.render(type.normalName)
            const metrics = await fetchURI(`/metrics/${type.type}`)
            const chartPlaceholder = metricComponent.querySelector('#chartPlaceholder')
            // await sleep(1500) // simulate realworld fetching
            metricComponent.querySelector('#spinner').remove()
            new frappe.Chart(chartPlaceholder, {
                data: prepareChartData(metrics),
                type: 'line',
                height: 250,
                colors: ['#7cd6fd', '#743ee2'],
            })
        }
    }
}

function prepareChartData(metrics) {
    return {
        labels: metrics.map((metric) => new Date(metric.createdAt).toLocaleString()),
        datasets: [{ values: metrics.map((metric) => metric.value) }],
    }
}

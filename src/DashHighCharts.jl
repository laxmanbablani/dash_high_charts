
module DashHighCharts
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/''_highchart.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_high_charts",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "async-HighChart.js",
    external_url = "https://unpkg.com/dash_high_charts@0.0.1/dash_high_charts/async-HighChart.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-HighChart.js.map",
    external_url = "https://unpkg.com/dash_high_charts@0.0.1/dash_high_charts/async-HighChart.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_high_charts.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_high_charts.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end

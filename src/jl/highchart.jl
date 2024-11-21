# AUTO GENERATED FILE - DO NOT EDIT

export highchart

"""
    highchart(;kwargs...)

A HighChart component.
HighChart renders Highcharts.js JSON
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `className` (String; optional): The className of the div
- `constructorType` (String; optional): 'chart', 'stockChart', 'mapChart', 'ganttChart'
- `options` (Dict; optional): The highcharts chart description
"""
function highchart(; kwargs...)
        available_props = Symbol[:id, :className, :constructorType, :options]
        wild_props = Symbol[]
        return Component("highchart", "HighChart", "dash_high_charts", available_props, wild_props; kwargs...)
end


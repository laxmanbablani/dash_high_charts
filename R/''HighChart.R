# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''HighChart <- function(id=NULL, className=NULL, constructorType=NULL, options=NULL) {
    
    props <- list(id=id, className=className, constructorType=constructorType, options=options)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'HighChart',
        namespace = 'dash_high_charts',
        propNames = c('id', 'className', 'constructorType', 'options'),
        package = 'dashHighCharts'
        )

    structure(component, class = c('dash_component', 'list'))
}

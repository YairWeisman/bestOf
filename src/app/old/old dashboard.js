/**
 * Created by Yair on 26/07/2017.
 */
// Callback that creates and populates a data table,
// instantiates a dashboard, a range slider and a pie chart,
// passes in the data and draws it.
function drawDashboard() {

  // Create our data table.
  var data = google.visualization.arrayToDataTable([
    ['Pop', 0, 28, 28, 100],
    ['Rock', 0, 38, 38, 100],
    ['Jazz', 0, 55, 55, 100],
    ['Electronic', 0, 77, 77, 100],
    ['Classic', 0, 66, 66, 100]
    // Treat first row as data as well.
  ], true);

  // Create a dashboard.
  var dashboard = new google.visualization.Dashboard(
    document.getElementById('dashboard_div'));

  // Create a range slider, passing some options
  var numberRangeSlider = new google.visualization.ControlWrapper({
    'controlType': 'NumberRangeFilter',
    'containerId': 'filter_div',
    'options': {
      'ui': {'label':'Number of songs range', 'labelSeparator': ':'},
      'filterColumnIndex': 2,
      'minValue': 0,
      'maxValue': 100,
      'fontName' : 'Segoe UI'
    },
    'state': {'lowValue': 0, 'highValue': 100}
  });
  var GenreFilter = new google.visualization.ControlWrapper({
    'controlType': 'StringFilter',
    'containerId': 'filter_div2',
    'options': {
      'ui': {'label':'Genre filter', 'labelSeparator': ':'},
      'filterColumnIndex': 0,
      'matchType': 'any',
      'fontName' : 'Segoe UI'
    },
    'state': {'value':''}
  });

  // Create a pie chart, passing some options
  var CandlestickChart = new google.visualization.ChartWrapper({
    'chartType': 'CandlestickChart',
    'containerId': 'chart_div',
    'options': {
      'width': 1224,
      'height': 220,
      'animation.duration': 500,
      'animation.easing': 'inAndOut',
      'animation.startup': true,
      'hAxis': {'title': 'Genre', 'titleTextStyle': { 'fontSize': 20, 'bold': false, 'italic': false  } },
      'vAxis': {'title': 'Number of songs', 'titleTextStyle': { 'fontSize': 20, 'bold': false, 'italic': false } },
      'tooltip': {'showColorCode': false, 'trigger': 'none'},
      'legend' : {'position':'none'},
      'fontName' : 'Segoe UI'
    }
//        'view': {'colums': [0,1]}
  });



  // Establish dependencies, declaring that 'filter' drives 'pieChart',
  // so that the pie chart will only display entries that are let through
  // given the chosen slider range.
  dashboard.bind([numberRangeSlider,GenreFilter], CandlestickChart);

  // Draw the dashboard.
  dashboard.draw(data);

//      google.visualization.events.addListener(GenreFilter, 'statechange', stateChangeHandler);
//      function stateChangeHandler(e) {
//          newState = ControlWrapper.getState()
//          genre = newState;

//          GenreFilter.setState(newState)
//          GenreFilter.draw();
//      }

}

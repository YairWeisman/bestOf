google.charts.load('current', {'packages':['corechart', 'controls']});
google.charts.setOnLoadCallback(drawDashboard);

var yearSelected = '';

function drawDashboard() {

  var data = google.visualization.arrayToDataTable([
    ['Year', 'Pop', 'Rock', 'Jazz'],
    [2016, 51, 24, 25],
    [2015, 20, 72, 8],
    [2014, 5, 5, 90]
  ]);

  // Create a dashboard.
  var dashboard = new google.visualization.Dashboard(
    document.getElementById('dashboard_div'));

  // var numberRangeSlider = new google.visualization.ControlWrapper({
  //   'controlType': 'NumberRangeFilter',
  //   'containerId': 'filter_div',
  //   'options': {
  //     'ui': {
  //       'label':'Set a year range',
  //       'labelSeparator': ':',
  //       'format': {pattern:'####'}
  //     },
  //     'filterColumnIndex': 0,
  //     'minValue': 1940,
  //     'maxValue': 2016,
  //     'fontName' : 'Segoe UI'
  //   },
  //   'state': {'lowValue': 1940, 'highValue': 2016}
  // });
  var YearFilter = new google.visualization.ControlWrapper({
    'controlType': 'StringFilter',
    'containerId': 'filter_div2',
    'options': {
      'ui': {
        'label':'Select a year',
        'labelSeparator': ':'
      },
      'filterColumnIndex': 0,
      'matchType': 'any',
      'fontName' : 'Segoe UI'
    },
    'state': {'value': this.yearSelected }
  });

  // Create a pie chart, passing some options
  var MaterialChart = new google.visualization.ChartWrapper({
    'chartType': 'ColumnChart',
    'containerId': 'chart_div',
    'options': {
      'width': 1224,
      'height': 220,
      'series': {
        '0': {'axis': 'number of Pop songs'},
        '1': {'axis': 'number of Rock songs'},
        '2': {'axis': 'number of Jazz songs'}
      },
      'vAxes': {
        0: {'title': 'Number of songs per genre'}
      },
      'hAxis': {
        'title': 'Year',
        'format': '####',
        'gridlines': {'count': '0'}
      }
    }
  });



  dashboard.bind([
    // numberRangeSlider,
    YearFilter], MaterialChart);
  dashboard.draw(data);

  google.visualization.events.addListener(YearFilter, 'statechange', stateChangeHandler);
  function stateChangeHandler() {
    yearSelected = YearFilter.visualization.K.value;
  }
}


var graphModule = function(updateYear) {
  google.charts.load('current', {'packages':['corechart', 'controls']});
  google.charts.setOnLoadCallback(drawDashboard);
  function drawDashboard() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Pop', 'Rock', 'Jazz'],
      [2016, 51, 24, 25],
      [2015, 20, 72, 8],
      [2014, 5, 5, 90]
    ]);
    var dashboard = new google.visualization.Dashboard(
      document.getElementById('dashboard_div'));
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
      'state': {'value': '' }
    });
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
    dashboard.bind([YearFilter], MaterialChart);
    dashboard.draw(data);
    google.visualization.events.addListener(YearFilter, 'statechange', stateChangeHandler);
    function stateChangeHandler() {
      updateYear(YearFilter.visualization.K.value);
    }
  }
};
module.exports = {
  graphModule: graphModule
};

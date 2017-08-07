var graphModule = function(updateYear, resetYear) {
  // load google model
  google.charts.load('current', {'packages':['corechart', 'controls']});
  google.charts.setOnLoadCallback(drawDashboard);
  function drawDashboard() {
    var data = google.visualization.arrayToDataTable([['year', attachTextToGenre('Pop'), attachTextToGenre('Rock'), attachTextToGenre('Jazz'), attachTextToGenre('Hip Hop'), attachTextToGenre('R&B'), attachTextToGenre('Electronic'), attachTextToGenre('Country'), attachTextToGenre('Classical'), attachTextToGenre('Indie'), attachTextToGenre('Folk'), attachTextToGenre('Metal'), attachTextToGenre('Reggea'), attachTextToGenre('Punk'), attachTextToGenre('Funk'), attachTextToGenre('Blues')], [attachTextToYear(1941), 1, 0, 47, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 4 ], [attachTextToYear(1942), 5, 0, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], [attachTextToYear(1943), 5, 0, 16, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1], [attachTextToYear(1944), 9, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [attachTextToYear(1945), 14, 0, 19, 0, 3, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3], [attachTextToYear(1946), 13, 0, 12, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], [attachTextToYear(1947), 12, 0, 9, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2], [attachTextToYear(1948), 11, 0, 6, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1], [attachTextToYear(1949), 10, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [attachTextToYear(1950), 11, 0, 6, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0], [attachTextToYear(1951), 7, 0, 1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0], [attachTextToYear(1952), 7, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2], [attachTextToYear(1953), 12, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [attachTextToYear(1954), 4, 1, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0], [attachTextToYear(1955), 12, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [attachTextToYear(1956), 24, 9, 9, 0, 8, 0, 9, 0, 0, 1, 0, 0, 0, 0, 0], [attachTextToYear(1957), 14, 14, 5, 0, 9, 0, 14, 0, 0, 2, 0, 0, 0, 2, 4], [attachTextToYear(1958), 15, 18, 3, 0, 5, 0, 9, 0, 0, 4, 0, 0, 0, 0, 5], [attachTextToYear(1959), 12, 15, 3, 0, 8, 0, 5, 1, 0, 6, 0, 0, 0, 0, 5], [attachTextToYear(1960), 29, 31, 5, 0, 15, 0, 20, 0, 0, 3, 0, 0, 1, 0, 4], [attachTextToYear(1961), 35, 30, 16, 0, 21, 1, 24, 0, 1, 4, 0, 0, 0, 0, 5], [attachTextToYear(1962), 43, 32, 14, 2, 29, 1, 19, 3, 1, 4, 0, 0, 1, 3, 5], [attachTextToYear(1963), 41, 20, 15, 1, 23, 4, 10, 2, 1, 4, 0, 0, 3, 3, 6], [attachTextToYear(1964), 42, 26, 7, 1, 13, 1, 7, 1, 2, 4, 1, 1, 4, 3, 3], [attachTextToYear(1965), 50, 33, 11, 0, 17, 5, 7, 0, 1, 8, 0, 0, 2, 6, 7], [attachTextToYear(1966), 42, 46, 12, 0, 21, 3, 6, 0, 3, 6, 1, 0, 10, 4, 11], [attachTextToYear(1967), 46, 37, 11, 0, 21, 2, 7, 1, 2, 12, 5, 0, 0, 5, 10], [attachTextToYear(1968), 35, 26, 11, 1, 25, 2, 3, 2, 2, 5, 3, 1, 1, 12, 5], [attachTextToYear(1969), 43, 34, 11, 0, 23, 8, 5, 1, 0, 3, 1, 0, 1, 14, 8], [attachTextToYear(1970), 35, 32, 6, 0, 26, 5, 10, 3, 1, 8, 1, 1, 0, 10, 10], [attachTextToYear(1971), 36, 26, 7, 1, 26, 6, 11, 0, 1, 11, 0, 0, 0, 14, 15], [attachTextToYear(1972), 32, 29, 7, 3, 27, 5, 8, 2, 1, 13, 4, 1, 0, 13, 13], [attachTextToYear(1973), 43, 37, 19, 2, 28, 6, 9, 1, 0, 7, 2, 1, 0, 15, 12], [attachTextToYear(1974), 49, 30, 10, 1, 20, 2, 14, 2, 2, 10, 3, 0, 1, 11, 10], [attachTextToYear(1975), 45, 38, 10, 0, 22, 2, 7, 2, 1, 6, 6, 0, 0, 14, 11], [attachTextToYear(1976), 55, 41, 10, 3, 23, 2, 7, 1, 3, 8, 8, 0, 1, 13, 14], [attachTextToYear(1977), 53, 40, 8, 1, 15, 1, 8, 2, 1, 10, 6, 0, 0, 11, 10], [attachTextToYear(1978), 48, 41, 9, 0, 14, 1, 5, 3, 0, 9, 7, 0, 1, 5, 6], [attachTextToYear(1979), 53, 41, 9, 3, 28, 3, 8, 2, 0, 6, 9, 0, 1, 14, 4], [attachTextToYear(1980), 47, 44, 18, 4, 21, 1, 13, 0, 0, 9, 6, 0, 0, 18, 11], [attachTextToYear(1981), 46, 41, 13, 0, 12, 4, 21, 0, 1, 8, 7, 1, 2, 10, 13], [attachTextToYear(1982), 41, 39, 17, 1, 16, 6, 10, 1, 0, 12, 8, 0, 4, 19, 8], [attachTextToYear(1983), 46, 34, 11, 0, 17, 5, 1, 0, 0, 4, 9, 7, 1, 26, 5], [attachTextToYear(1984), 43, 23, 13, 0, 20, 6, 4, 1, 0, 1, 10, 3, 2, 19, 8], [attachTextToYear(1985), 42, 16, 12, 0, 19, 4, 4, 1, 0, 2, 6, 0, 3, 26, 6], [attachTextToYear(1986), 37, 14, 5, 2, 14, 7, 3, 0, 0, 3, 5, 0, 4, 12, 7], [attachTextToYear(1987), 42, 31, 10, 3, 10, 6, 0, 0, 2, 3, 6, 0, 3, 17, 7], [attachTextToYear(1988), 43, 31, 11, 1, 13, 3, 0, 1, 0, 1, 11, 2, 6, 9, 10], [attachTextToYear(1989), 38, 21, 10, 13, 18, 2, 1, 0, 0, 3, 12, 1, 0, 15, 9], [attachTextToYear(1990), 31, 19, 7, 14, 13, 3, 0, 0, 0, 1, 7, 1, 0, 6, 6], [attachTextToYear(1991), 36, 19, 14, 14, 19, 6, 1, 0, 0, 5, 4, 3, 1, 2, 5], [attachTextToYear(1992), 24, 22, 15, 13, 21, 3, 0, 0, 0, 2, 6, 0, 1, 5, 3], [attachTextToYear(1993), 22, 21, 11, 17, 14, 3, 1, 1, 0, 3, 10, 2, 1, 6, 2], [attachTextToYear(1994), 20, 17, 8, 11, 7, 3, 3, 0, 0, 6, 7, 6, 1, 4, 1], [attachTextToYear(1995), 17, 23, 13, 15, 18, 3, 1, 0, 0, 3, 4, 2, 1, 5, 2], [attachTextToYear(1996), 24, 25, 12, 15, 16, 5, 0, 0, 0, 8, 3, 3, 5, 4, 3], [attachTextToYear(1997), 21, 11, 7, 17, 19, 3, 3, 0, 1, 4, 0, 1, 3, 2, 2], [attachTextToYear(1998), 27, 12, 6, 15, 25, 3, 2, 0, 2, 5, 1, 2, 4, 0, 2], [attachTextToYear(1999), 23, 21, 1, 9, 19, 1, 6, 0, 0, 1, 5, 1, 9, 2, 5], [attachTextToYear(2000), 20, 11, 2, 8, 17, 3, 10, 2, 0, 1, 2, 0, 5, 0, 1], [attachTextToYear(2001), 18, 15, 2, 19, 20, 1, 11, 1, 2, 2, 7, 2, 6, 1, 0], [attachTextToYear(2002), 13, 11, 1, 21, 10, 4, 8, 0, 0, 1, 3, 3, 7, 2, 0], [attachTextToYear(2003), 13, 9, 1, 24, 16, 3, 12, 0, 0, 3, 5, 3, 8, 1, 2], [attachTextToYear(2004), 15, 13, 0, 24, 12, 5, 9, 0, 0, 0, 7, 2, 6, 2, 1], [attachTextToYear(2005), 18, 13, 0, 25, 21, 4, 3, 0, 3, 0, 5, 1, 9, 3, 3], [attachTextToYear(2006), 29, 17, 0, 30, 21, 6, 3, 0, 1, 0, 6, 1, 7, 3, 1], [attachTextToYear(2007), 17, 11, 1, 25, 22, 3, 1, 0, 1, 0, 8, 1, 10, 3, 0], [attachTextToYear(2008), 23, 12, 1, 23, 28, 3, 1, 0, 0, 0, 5, 3, 5, 3, 2], [attachTextToYear(2009), 22, 13, 3, 16, 14, 9, 6, 0, 2, 3, 3, 4, 4, 2, 1], [attachTextToYear(2010), 28, 11, 0, 29, 15, 14, 8, 1, 2, 0, 1, 3, 2, 2, 1], [attachTextToYear(2011), 19, 10, 2, 24, 14, 12, 14, 0, 1, 3, 0, 1, 0, 3, 0], [attachTextToYear(2012), 24, 13, 0, 20, 10, 13, 14, 0, 4, 3, 3, 1, 1, 3, 3], [attachTextToYear(2013), 35, 7, 0, 23, 17, 13, 15, 1, 1, 7, 0, 0, 0, 5, 0], [attachTextToYear(2014), 26, 14, 1, 17, 14, 8, 11, 0, 4, 4, 1, 3, 6, 2, 3], [attachTextToYear(2015), 31, 4, 3, 21, 25, 8, 6, 0, 3, 4, 0, 2, 4, 1, 6], [attachTextToYear(2016), 18, 6, 2, 24, 22, 15, 4, 0, 1, 0, 0, 3, 0, 2, 2]]);
    // colum for html tooltips
    data.addColumn({'type': 'string', 'role': 'tooltip', 'p': {'html': true}});
    var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard_div'));
    var YearFilter = new google.visualization.ControlWrapper({
      'controlType': 'StringFilter',
      'containerId': 'filter_div2',
      'options': {
        'ui': {
          'label': 'Select a year in the range',
          'labelSeparator': ':',
          'cssClass': 'select-text'
        },
        'filterColumnIndex': 0,
        'matchType': 'any',
        'fontName': 'Segoe UI'
      },
      'state': {'value': ''}
    });
    var YearSlider = new google.visualization.ControlWrapper({
      'controlType': 'NumberRangeFilter',
      'containerId': 'filter_div',
      'options': {
        'filterColumnLabel': 'year',
        'ui': {
          'label':'Set a year range',
          'labelSeparator': ':',
          'cssClass': 'select-text',
          'format': {pattern:'####'},
          'fontName' : 'Segoe UI'
        },
        'minValue': 1941,
        'maxValue': 2016,

      },
      'state': {'lowValue': 1941, 'highValue': 2016}
    });
    var MaterialChart = new google.visualization.ChartWrapper({
      'chartType': 'ColumnChart',
      'containerId': 'chart_div',
      'options': {
        'height': 220,
        'tooltip': {
          'tooltip': {isHtml: true}
        },
        'legend': 'none',
        'vAxes': {
          0: {
            'title': 'Popularity',
            'titleTextStyle': {
              'fontSize': 16,
              'bold': false,
              'italic': false
            },
            'gridlines': {
              'count': '0'
            }
          }
        },
        'hAxis': {
          'title': 'Year',
          'format': '####',
          'gridlines': {'count': '0'},
          'titleTextStyle': {
            'fontSize': 16,
            'bold': false,
            'italic': false
          }
        }
      }
    });
    dashboard.bind([YearFilter, YearSlider], MaterialChart);
    dashboard.draw(data);
    google.visualization.events.addListener(YearFilter, 'statechange', stateChangeHandler);
    google.visualization.events.addListener(YearSlider, 'statechange', stateChangeHandler);
    function stateChangeHandler() {
      var value = YearFilter.visualization.K.value;
      if (value.length > 3) {
        updateYear(value);
      } else resetYear();
    }
    function attachTextToGenre(genre) {
      return genre+' songs in this year \'Top Billboards\''
    }
    function attachTextToYear(year) {
      return year
    }
  }
};
module.exports = {
  graphModule: graphModule
};

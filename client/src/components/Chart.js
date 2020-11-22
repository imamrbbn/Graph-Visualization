import React, { useLayoutEffect, useRef } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useSelector } from 'react-redux';

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

export default function Chart(props) {
  let physicalCharacteristics = props.physicalCharacteristics
  
  useLayoutEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.XYChart3D);
    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.labels.template.maxWidth = 95

    
    chart.data = []
    physicalCharacteristics.forEach(person => {
      chart.data.push({
        name: person.name,
        height: Number(person.height),
        mass:  Number(person.mass),
        })
    })

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.rotation = -45;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.fontSize = 12
    categoryAxis.renderer.labels.template.dx = -10
    categoryAxis.renderer.labels.template.dy = -10

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.labels.template.fontSize = 13
    valueAxis.renderer.labels.template.adapter.add("text", function(text) {
      return text;
    });

    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "mass";
    series.dataFields.categoryX = "name";
    series.name = "Mass";
    series.clustered = false;
    series.columns.template.tooltipText = " [bold]{categoryX}[/]  Height: [bold]{valueY}[/] kg";
    series.columns.template.fillOpacity = 0.9;
    series.columns.template.fill = am4core.color("#e9f2fe");
    series.columns.template.width = 25
    series.tooltip.label.fontSize = 10;
    
    var series2 = chart.series.push(new am4charts.ColumnSeries3D());
    series2.dataFields.valueY = "height";
    series2.dataFields.categoryX = "name";
    series2.name = "Height";
    series2.clustered = false;
    series2.columns.template.tooltipText = "[bold]{categoryX}[/]  Mass: [bold]{valueY}[/] cm";
    series2.columns.template.fill = am4core.color("#0185d4");
    series2.columns.template.width = 25
    series2.tooltip.label.fontSize = 10;

    // chart.current = chart;

    return () => {
      chart.dispose();
    };
  }, [physicalCharacteristics]);

  
  return (
    <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
  )
}

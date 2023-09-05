import * as d3 from "d3";
import cloud from "d3-cloud";
import { useEffect } from "react";

interface IWordCloud {
  keywords: string[];
}

export default function WordCloud({ keywords }: IWordCloud) {
  const width = 300;
  const height = 300;
  const color = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };
  useEffect(() => {
    cloud()
      .size([width, height])
      .words(
        keywords.map(function (d) {
          return { text: d, size: 20 + Math.random() * 30, test: "haha" };
        })
      )
      .rotate(() => Math.floor(Math.random() * 2))
      .padding(20)
      .font("Impact")
      .fontWeight("bold")
      .fontSize((d: any) => d.size)
      .on("end", draw)
      .start();

    function draw(words: any) {
      d3.select("#word-cloud")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", function (d: any) {
          return d.size + "px";
        })
        .style("fill", function (d: any) {
          return color();
        })
        .style("fill-opacity", 0.5)
        .style("font-family", "Impact")
        .attr("text-anchor", "middle")
        .attr("transform", function (d: any) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function (d: any) {
          return d.text;
        });
    }
  });

  return (
    <div>
      <div id="word-cloud"></div>
    </div>
  );
}

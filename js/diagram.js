var slide = d3.select("#d3slide").append("svg:svg")
                                   .attr("height", "500px")
                                   .attr("width", "500px")
                                   .style("position", "absolute")
                                   .style("margin-left","-250px")
                                   .style("margin-top","-250px")
                                   .style("left","50%")
                                   .style("top","50%")
                                   .style("border", "1px solid black");

slide.selectAll("g")
    .data([2,4,8])
    .enter()
    .append("svg:circle")
    .attr("fill", "#FF000")
    .attr("cx", function(d, i){
        console.log(i,d);
            return (0 + i * 80);
    })
    .attr("cy", 200)
    .attr("r", 25)
    .append("svg:text")
    .attr("text-anchor","middle")
    .attr("x", function(d, i){
        console.log(i,d);
            return (0 + i * 80);
    })
    .attr("y", 250)
    .text("test");


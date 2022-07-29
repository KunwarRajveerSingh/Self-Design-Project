AFRAME.registerComponent("kidney",{
    tick: function(){
        window.addEventListener("click", e => {
            
        })
        heart = document.querySelector("#kidney")
        this.el.addEventListener("click", e => {
            console.log("hello")
        })
        
        scene = document.querySelector("a-scene")
        plane = document.createElement("a-plane")
        plane.setAttribute('position', {x: -1.2, y: 0.4, z: -4})
        plane.setAttribute("geometry", {primitive: "plane", width: "1.2", height: "1.2"})

        plane.setAttribute("visible",false)

        headerplane = document.createElement("a-plane")
        headerplane.setAttribute("geometry", {primitive: 'plane', width: '0.9', height: '0.3'})
        headerplane.setAttribute("material", {color: 'yellow'})
        headerplane.setAttribute("position", {x: 0, y: 0.3, z: 0.02})
        headerplane.setAttribute("align", "center")
        plane.appendChild(headerplane)

        title = document.createElement("a-entity")
        title.setAttribute("id", "title1")
        title.setAttribute("position", {x: 0, y: 0, z: 0.3})
        title.setAttribute("text", {value:'Important keypoints of kidney', 
            color:"black", width: 1, height: 2, font: "monoid", align: "center"
    })
        headerplane.appendChild(title)

        kdata = document.createElement("a-entity")
        kdata.setAttribute("id", "data1")
        kdata.setAttribute("position", {x: -0.04, y: -0.2, z: 0.3})
        kdata.setAttribute("text", {value:'The kidneys are bilateral organs placed retroperitoneally in the upper left and right abdominal\nquadrants and are part of the urinary system\nTheir shape resembles a bean, where we can describe the superior and inferior poles,\nas well as the major convexity pointed laterally, and the minor concavity pointed medially.', 
            color:"black", width: 1, height: 3, font: "monoid", align: "center"
    })
        plane.appendChild(kdata)

        borderplane = document.createElement("a-plane")
        borderplane.setAttribute("geometry", {primitive: 'plane', width: '1.3', height: '1.3'})
        borderplane.setAttribute("material", {color: 'blue'})
        borderplane.setAttribute("position", {x: 0, y: 0, z: -0.01})
        plane.appendChild(borderplane)

        scene.appendChild(plane)
    },

    init: function(){
        window.addEventListener("click", e => {
            console.log("hello")
            plane.setAttribute("visible", true)
        })
    }
})
AFRAME.registerComponent("brain",{
    tick: function(){
        window.addEventListener("click", e => {
            
        })
        heart = document.querySelector("#brain")
        this.el.addEventListener("click", e => {
            console.log("hello")
        })
        
        scene = document.querySelector("a-scene")
        plane = document.createElement("a-plane")
        plane.setAttribute('position', {x: -1.5, y: 2.5, z: -4})
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
        title.setAttribute("text", {value:'Important keypoints of brain', 
            color:"black", width: 1, height: 2, font: "monoid", align: "center"
    })
        headerplane.appendChild(title)

        bdata = document.createElement("a-entity")
        bdata.setAttribute("id", "data1")
        bdata.setAttribute("position", {x: 0.1, y: -0.2, z: 0.3})
        bdata.setAttribute("text", {value:' Weighing about 3 pounds in the average adult, the brain is about 60% fat\nThe remaining 40% is a combination of water, protein, carbohydrates and salts\nThe brain itself is a not a muscle\nIt contains blood vessels and nerves, including neurons and glial cells.', 
            color:"black", width: 1, height: 3, font: "monoid", align: "left"
    })
        plane.appendChild(bdata)

        


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
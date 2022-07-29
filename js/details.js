AFRAME.registerComponent("details",{
    tick: function(){
       
        heart = document.querySelector("#heart")
               
        scene = document.querySelector("a-scene")
        plane = document.createElement("a-plane")
        plane.setAttribute('position', {x: 1.2, y: 1.9, z: -4})
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
        title.setAttribute("text", {value:'Important keypoints of heart', 
            color:"black", width: 1, height: 2, font: "monoid", align: "center"
    })
        headerplane.appendChild(title)

        hdata = document.createElement("a-entity")
        hdata.setAttribute("id", "data1")
        hdata.setAttribute("position", {x: -0.04, y: -0.2, z: 0.3})
        hdata.setAttribute("text", {value:'1. Pumping oxygenated blood to other body parts\n2. Pumping hormones and other vital substances to different parts of the body\n3. Receiving deoxygenated blood and carrying metabolic waste products from the body and pumping it to the lungs for oxygenation\n4. Maintaining blood pressure', 
            color:"black", width: 1, height: 3, font: "monoid", align: "left"
    })
        plane.appendChild(hdata)




        borderplane = document.createElement("a-plane")
        borderplane.setAttribute("geometry", {primitive: 'plane', width: '1.3', height: '1.3'})
        borderplane.setAttribute("material", {color: 'blue'})
        borderplane.setAttribute("position", {x: 0, y: 0, z: -0.01})
        plane.appendChild(borderplane)

        scene.appendChild(plane)
    },
    update: function(){
        window.addEventListener("click", e => {
            console.log("hello")
            plane.setAttribute("visible", true)
        })
    }
})
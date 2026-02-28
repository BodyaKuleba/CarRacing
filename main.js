let speed = 0
let maxSpeed = 50
let accel = 0.1
let brakeAccel = 0.2
let xPos1 = 0
let xPos2 = 0
let xPos3 = 0
let reverseSpeed = -3
let reverse = false
let lights1 = false
let lights2 = false
let lights3 = false
let controlsOn = true
let currentGame
let gameOpened = false

let btn = new Audio("Sounds/btn.mp3")
let open = new Audio("Sounds/open.mp3")
let shut = new Audio("Sounds/shut.mp3")
let lightSound = new Audio("Sounds/light.mp3")
let beep = new Audio("Sounds/beep.mp3")
let close = new Audio("Sounds/close.mp3")
let swoosh = new Audio("Sounds/swing.mp3")

btn.volume = 0.2
open.volume = 0.1
shut.volume = 0.1
lightSound.volume = 0.1
beep.volume = 0.2
close.volume = 0.2
swoosh.volume = 0.2


const keys1 = {}
const keys2 = {}
const keys3 = {}

document.addEventListener("keydown", function (e) {
    e.preventDefault()
    if (currentGame == "map1") {
        console.log(e.keyCode);
        keys1[e.keyCode] = true;
        console.log(keys1);
    } else if (currentGame == "map2") {
        console.log(e.keyCode);
        keys2[e.keyCode] = true;
        console.log(keys2);
    } else if (currentGame == "map3") {
        console.log(e.keyCode);
        keys3[e.keyCode] = true;
        console.log(keys3);
    }
})
document.addEventListener("keyup", function (e) {
    if (currentGame == "map1" && gameOpened == true) {
        console.log(e.keyCode);
        keys1[e.keyCode] = false;
        console.log(keys1);
        if (e.keyCode == 69) {
            lightSound.currentTime = 0
            lightSound.play()
            if (!lights1) {
                $(".frontLights").css("opacity", "1");
                $(".backLights").css("opacity", "1");
                lights1 = true;
            } else {
                $(".frontLights").css("opacity", "0");
                $(".backLights").css("opacity", "0");
                lights1 = false;
            }
        }
        if (e.keyCode == "80") {
            if (controlsOn) {
                $(".controlsText").css("bottom", "-400px")
                controlsOn = false
            } else {
                $(".controlsText").css("bottom", "0")
                controlsOn = true
            }
        }
        if (e.keyCode == 82) {
            swoosh.currentTime = 0
            swoosh.play()
            reverse = !reverse;
            $(".carContainer").css("transform", `rotateZ(${reverse ? 180 : 0}deg)`);
        }
    } else if (currentGame == "map2" && gameOpened == true) {
        console.log(e.keyCode);
        keys2[e.keyCode] = false;
        console.log(keys2);
        if (e.keyCode == 69) {
            lightSound.currentTime = 0
            lightSound.play()
            if (!lights2) {
                $(".frontLights").css("opacity", "1");
                $(".backLights").css("opacity", "1");
                lights2 = true;
            } else {
                $(".frontLights").css("opacity", "0");
                $(".backLights").css("opacity", "0");
                lights2 = false;
            }
        }
        if (e.keyCode == "80") {
            if (controlsOn) {
                $(".controlsText").css("bottom", "-400px")
                controlsOn = false
            } else {
                $(".controlsText").css("bottom", "0")
                controlsOn = true
            }
        }
        if (e.keyCode == 82) {
            swoosh.currentTime = 0
            swoosh.play()
            reverse = !reverse;
            $(".carContainer").css("transform", `rotateZ(${reverse ? 180 : 0}deg)`);
        }
    } else if (currentGame == "map3" && gameOpened == true) {
        console.log(e.keyCode);
        keys3[e.keyCode] = false;
        console.log(keys3);
        if (e.keyCode == 69) {
            lightSound.currentTime = 0
            lightSound.play()
            if (!lights3) {
                $(".frontLights").css("opacity", "1");
                $(".backLights").css("opacity", "1");
                lights3 = true;
            } else {
                $(".frontLights").css("opacity", "0");
                $(".backLights").css("opacity", "0");
                lights3 = false;
            }
        }
        if (e.keyCode == 82) {
            swoosh.currentTime = 0
            swoosh.play()
            reverse = !reverse;
            $(".carContainer").css("transform", `rotateZ(${reverse ? 180 : 0}deg)`);
        }
        if (e.keyCode == "80") {
            if (controlsOn) {
                $(".controlsText").css("bottom", "-400px")
                controlsOn = false
            } else {
                $(".controlsText").css("bottom", "0")
                controlsOn = true
            }
        }
    }
})

let switchOn = localStorage.getItem("switch") || false

function switchTurn() {
    if (switchOn == false) {
        $(".driverDiv").css("display", "block")
        $(".driverModel").css("opacity", "1")
        $(".switch").css("left", "30%").css("backgroundColor", "#ee7d27")
        localStorage.setItem("switch", true)
        switchOn = true
    } else {
        $(".driverDiv").css("display", "none")
        $(".driverModel").css("opacity", "0")
        $("")
        $(".switch").css("left", "-30%").css("backgroundColor", "#f54729ff")
        localStorage.setItem("switch", false)
        switchOn = false
    }
}
switchTurn()

$("#driverSwitch").click(() => {
    switchTurn()
})

function update() {
    if (currentGame == "map1") {

        if (keys1[68]) {
            if (speed < maxSpeed) {
                speed += accel
            }
        }

        else if (keys1[65]) {
            if (speed > reverseSpeed) {
                speed -= accel * 4
            }
        }

        else {
            if (speed > 0) {
                speed -= brakeAccel;
                if (speed < 0) speed = 0
            } else if (speed < 0) {
                speed += brakeAccel
                if (speed > 0) speed = 0
            }
        }

        xPos1 += speed
        $(".map1").css("background-position", `-${xPos1}px`)

        requestAnimationFrame(update);
    } else if (currentGame == "map2") {
        if (keys2[68]) {
            if (speed < maxSpeed) {
                speed += accel
            }
        }

        else if (keys2[65]) {
            if (speed > reverseSpeed) {
                speed -= accel * 4
            }
        }

        else {
            if (speed > 0) {
                speed -= brakeAccel;
                if (speed < 0) speed = 0
            } else if (speed < 0) {
                speed += brakeAccel
                if (speed > 0) speed = 0
            }
        }

        xPos2 += speed
        $(".map2").css("background-position", `-${xPos2}px`)

        requestAnimationFrame(update);
    } else if (currentGame == "map3") {
        if (keys3[68]) {
            if (speed < maxSpeed) {
                speed += accel
            }
        }

        else if (keys3[65]) {
            if (speed > reverseSpeed) {
                speed -= accel * 4
            }
        }

        else {
            if (speed > 0) {
                speed -= brakeAccel;
                if (speed < 0) speed = 0
            } else if (speed < 0) {
                speed += brakeAccel
                if (speed > 0) speed = 0
            }
        }

        xPos3 += speed
        $(".map3").css("background-position", `-${xPos3}px`)

        requestAnimationFrame(update);
    }
}

let alarmInt

function tipGenerator() {
    let num = Math.floor(Math.random() * 14 + 1)
    console.log(num)
    if (num == 1) {
        return "Did you know that this game is PC only?"
    } else if (num == 2) {
        return "This was made in 2.5 days"
    } else if (num == 3) {
        return "This isn't that helpful"
    } else if (num == 4) {
        return "This is random"
    } else if (num == 5) {
        return "`Developer` was here"
    } else if (num == 6) {
        return "The maps were made in Figma"
    } else if (num == 7) {
        return "No mobile support :("
    } else if (num == 8) {
        return "The font's name is Quantico"
    } else if (num == 9) {
        return "hello"
    } else if (num == 10) {
        return 'Hold "A" simulator'
    } else if (num == 11) {
        return "Sasha wasn't here"
    } else if (num == 12) {
        return "THIS IS `Insert image here`"
    } else if (num == 13) {
        return "Stop botting the domain"
    } else {
        return "Very cool."
    }
}

function transition(duration, from, to, gameTurnedOn) {
    shut.currentTime = 0
    shut.play()
    $("#tipText").text(tipGenerator())
    $(".blackScreen").css("top", "0")
    setTimeout(function () {
        open.currentTime = 0
        open.play()
        $(`${from}`).css("display", "none")
        $(`${to}`).css("display", "flex")
        $(".blackScreen").css("top", "-100vh")
        if (gameTurnedOn) {
            gameOpened = true
        } else {
            gameOpened = false
        }
    }, duration)
}

function changeCar(pressedCar) {
    beep.currentTime = 0
    beep.play()
    if (pressedCar == "car1") {
        return "https://static.vecteezy.com/system/resources/thumbnails/019/070/948/small_2x/sport-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png"
    } else if (pressedCar == "car2") {
        return "https://static.vecteezy.com/system/resources/thumbnails/047/428/462/small/top-view-of-red-sedan-car-with-transparent-background-png.png"
    } else if (pressedCar == "car3") {
        return "https://iod.prs.porsche.com/iod/image/UZ/9926S2/1/N4Igxg9gdgZglgcxALlAQynAtmgLnaAZxQG0BdAGnDSwFMAnNFUOAExRFoA9cBaXCAAde9RAAtcIKkPxFmIAG5pRGSchCtahANYDBIAL4GqtKArj1odKGpbt1AdTFxcDCBCwBBADaCxTaUFZKGJUIypvcXwoJFQQNg4AEU8ATSkQGQIQ5nCQQUtWAFcwW3j7EABOCoAmADYAZWr0zLk4yEKbegBPAGEITQ4AVQAtdKx+2m8U2mUUaoAGOsDg0JIQeYBJAGZ0+YA5AEZdvZ7dgAUK3YAVRPSDgCEACTuAcXm7gBkAJTvD3+eqAczu9AWcAKJ3K5NQEANTuAA0jlRqj0AKzpaqJdHImFIkDVBwg-HDU5ULb3HZkgBie3SW0enjpACkACx0gCKVzp9SJW0GL3SLM8lJALMSRJZLypgo2tUFHzlVBZg2lVFRFVuaoAsoy1fDSSBap4AOzpWr3XWGsF42pgiFUWpUomOplmjbOpmaw0AaQAHGa9qMHV8DbV4XCqMbPN70sbHjHI96RcatZdI-zYzCicb4dCQMaUkTfUzBulfR9Lb69qaqL6rnjfTCBVQKqjLRVPF6KvciRUme2LukKjCE5UHFyW8N7SAwfNLWCtXmaUSqVcV8MiS8Ds2QC807vHiKXldsbvcekNr6gyANjD9xtCek-aPvZ48972XiPsfEl8PuktWNA0zgBEB2TbdJ2VnSDHjxdl2Tzdkvn9Kh2RhEUvgAeUwqlMPBWkqEGQcqBhHoiRhJ10hhD53jIIxjBAQhaFwaIEFCUAYAgegcDUPIYnSXBGBCQRlFMNRBMKWgjCAA?clientId=icc"
    } else if (pressedCar == "car4") {
        return "https://iod.prs.porsche.com/iod/image/VN/Y1AGI1/1/N4Igxg9gdgZglgcxALlAQynAtmgLnaAZxQG0BdAGnDSwFMAnNFUOAExRFoA9cBaXCAAde9RAAtcIKkPxFmIAG5pRGSchCtahANYDBIAL4GqtKArj1odKGpbt1AdTFxcDCBCwBBADaCxTaUFZKGJUIypvcXwoJFQQNg4AEU8ATSkQGQIQ5nCQQUtWAFcwW3j7EBSARk8AcQBJSvTMuTjIQpt6AE8AYQhNDgA1ADl0rD7abxTaZRQAJgAGWYA2QODQkhB5ocaqLe70+YAVRPTKmvnTgBkAJVOhgGY7z1OABQuqSpeAUVPD2dOABr-KizboAdnSs0SAFZIQAJSEAKQAQpCBo8QQ4AJzpe7IgAsuO6zyo9wAYiSQPdERDSQBpGq4l4jUkARUOuIAyu8QPjPBjeYkefiycDeQBVMnpfEAgVLaF09JLTw8paJS5Kr47EBLMmqsmIpU1SlLOpyxEnKhLOkADiVQ0NVuu+ytAIG6TByo9nkVVDBdIFYPFjL9ANhfpSdqoNrq4vSNsuCOjhyW8YGGqoWOhqMzyJ5WMRlKxAFkBViXmX0+ksQ4OZmAFo-KieG0ukCeOo4qhfeaUr7FsVfAY8smHAU1SoA9I1RE8mql6eHOcDbU1es8uH4uNUOo2+vpOoDLsgOoOHmIrGs9KIuHngE822c9J0zypqh05ECulw8MgOnc9JLkqHMQEuGpjmuDMQCGNshjPdJWVmR0QFZLUEMRQkqFZVltVZa4oxQ4d0nFRJtQGboeQGPV0nTSjrlpEABkOY8BgcVMyCMYwQEIWhcGiBBQlAGAIHoHA1DyGJ0lwRgQkEZRTDUaTCloIwgA?clientId=icc"
    } else {
        return "https://iod.prs.porsche.com/iod/image/CA/Y1ADJ1/1/N4Igxg9gdgZglgcxALlAQynAtmgLnaAZxQG0BdAGnDSwFMAnNFUOAExRFoA9cBaXCAAde9RAAtcIKkPxFmIAG5pRGSchCtahANYDBIAL4GqtKArj1odKGpbt1AdTFxcDCBCwBBADaCxTaUFZKGJUIypvcXwoJFQQNg4AEU8ATSkQGQIQ5nCQQUtWAFcwW3j7EBSARk9EgClK9My5OMhCm3oATwBhCE0OLs90rF7abxTaZRQAJgAGKYA2QODQkhAZgDkGqhmARQBxdJmAFUT0yr2ADjOAGQBlM-WAZgfBqkqABRmz94BRM6Ovm8ABpbEBTLoAVnSU0SgLBtQAQtCAGqgqYOACc0IAWkiqI8EQAWdKPAYkgBirxAj1qxPxAGkDvjrnTqbc4YSLqcqITPM8ebD0oTyfMhXtyUKAKp4kCEoGsiFAoHpeaeOHzH6g+bk9XkpkgeZ7KnzACS-INtW5BvpVyo8wAsir1jsVQAlLoqoHI9IAdkefyoPtVvs8119eyxgYAElSffTzT77ZGQD7JfqfUCpr6UraQBcTUd0hdrlSLkdRVQLsj9RiIVSMTV0hiEXCMbV6-bzRj3j6m8j6U2HIWqBjsQGQJ4LhKqJ4qZ4TcnElNlVQfjMqT97VnV8i4eSAelydi4XtKiuQHtaif7ay9qj0ntj+kTcjWSaHObahjx7Uo3DakCcI2vcVD0p424gPSCLmvS7LpNcewnK6YZUOstQQesDisjs5zpDsa54eheE4XhrrJjskq5jsDhQlQkqCnR7zJsiXQQciOrpMi1xwsirpwmOHpkEYxggIQtC4NECChKAMAQPQOBqHkMTpLgjAhIIyimGoqmFLQRhAA?clientId=icc"
    }
}

function changeDriver(pressedDriver) {
    beep.currentTime = 0
    beep.play()
    if (pressedDriver == "driver1") {
        return "Images/Sashko.png"
    } else if (pressedDriver == "driver2") {
        return "Images/Stepa.jpg"
    } else if (pressedDriver == "driver3") {
        return "Images/Me.png"
    } else if (pressedDriver == "driver4") {
        return "Images/CatBoii.jpg"
    } else {
        return "Images/Vitalik.jpg"
    }
}

//Button transitions

$("#startBtn").click(() => {
    btn.currentTime = 0
    btn.play()
    transition(2000, ".mainMenu", ".mapMenu", false)
})

$("#exitBtn1").click(() => {
    close.currentTime = 0
    close.play()
    transition(2000, ".map1", ".mapMenu", false)
    speed = 0
})

$("#exitBtn2").click(() => {
    close.currentTime = 0
    close.play()
    transition(2000, ".map2", ".mapMenu", false)
    speed = 0
})

$("#exitBtn3").click(() => {
    close.currentTime = 0
    close.play()
    transition(2000, ".map3", ".mapMenu", false)
    speed = 0
})

$("#exitBtn4").click(() => {
    close.currentTime = 0
    close.play()
    transition(2000, ".mapMenu", ".mainMenu", false)
})

$("#completeCustomization").click(() => {
    btn.currentTime = 0
    btn.play()
    transition(2000, ".customizationMenu", ".mainMenu", false)
})

$("#customizeBtn").click(() => {
    btn.currentTime = 0
    btn.play()
    transition(2000, ".mainMenu", ".customizationMenu", false)
})

let updateRunning = false;

$("#plainsPlayBtn").click(() => {
    btn.currentTime = 0
    btn.play()
    currentGame = "map1";
    if (!updateRunning) {
        updateRunning = true;
        update();
    }
    transition(2000, ".mapMenu", ".map1", true);
});

$("#seaTripPlayBtn").click(() => {
    btn.currentTime = 0
    btn.play()
    currentGame = "map2";
    if (!updateRunning) {
        updateRunning = true;
        update();
    }
    transition(2000, ".mapMenu", ".map2", true);
});

$("#whiteRuinsPlayBtn").click(() => {
    btn.currentTime = 0
    btn.play()
    currentGame = "map3";
    if (!updateRunning) {
        updateRunning = true;
        update();
    }
    transition(2000, ".mapMenu", ".map3", true);
});

//Car model buttons

$("#car1").click(() => {
    $(".carDiv").css("background-image", `url(${changeCar("car1")})`)
    $(".carModel").css("background-image", `url(${changeCar("car1")})`)
})

$("#car2").click(() => {
    $(".carDiv").css("background-image", `url(${changeCar("car2")})`)
    $(".carModel").css("background-image", `url(${changeCar("car2")})`)
})

$("#car3").click(() => {
    $(".carDiv").css("background-image", `url(${changeCar("car3")})`)
    $(".carModel").css("background-image", `url(${changeCar("car3")})`)
})

$("#car4").click(() => {
    $(".carDiv").css("background-image", `url(${changeCar("car4")})`)
    $(".carModel").css("background-image", `url(${changeCar("car4")})`)
})

$("#car5").click(() => {
    $(".carDiv").css("background-image", `url(${changeCar("car5")})`)
    $(".carModel").css("background-image", `url(${changeCar("car5")})`)
})

//Driver model buttons

$("#driver1").click(() => {
    $(".driverDiv").css("background-image", `url(${changeDriver("driver1")})`)
    $(".driverModel").css("background-image", `url(${changeDriver("driver1")})`)
})

$("#driver2").click(() => {
    $(".driverDiv").css("background-image", `url(${changeDriver("driver2")})`)
    $(".driverModel").css("background-image", `url(${changeDriver("driver2")})`)
})

$("#driver3").click(() => {
    $(".driverDiv").css("background-image", `url(${changeDriver("driver3")})`)
    $(".driverModel").css("background-image", `url(${changeDriver("driver3")})`)
})

$("#driver4").click(() => {
    $(".driverDiv").css("background-image", `url(${changeDriver("driver4")})`)
    $(".driverModel").css("background-image", `url(${changeDriver("driver4")})`)
})

$("#driver5").click(() => {
    $(".driverDiv").css("background-image", `url(${changeDriver("driver5")})`)
    $(".driverModel").css("background-image", `url(${changeDriver("driver5")})`)

})

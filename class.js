class Mission {
  // states first
  constructor(
    fuelLevel,
    oxygenLevel,
    foodLevel,
    SpaceCraft,
    launchDateDay,
    launchDateMonth,
    launchDateYear,
    numAstronauts
  ) {
    //substantiate states
    this.fuelLevel = fuelLevel;
    this.oxygenlevel = oxygenLevel;
    this.foodLevel = foodLevel;
    this.SpaceCraft = SpaceCraft;
    this.launchDateDay = launchDateDay;
    this.launchDateMonth = launchDateMonth;
    this.launchDateYear = launchDateYear;
    this.numAstronauts = numAstronauts;
  }
  //list methods
  launch() {
    //code for launch home
    alert("We are taking off.");
  }
  disMissionLaunchDate() {
    alert(
      "This mission launches on " +
        this.launchDateMonth +
        " " +
        this.launchDateDay +
        ", " +
        this.launchDateYear
    );
  }
}
function launchFall() {
  console.log("Fall Launch Active");
  fallLaunch.launch();
}
function displayFall() {
  console.log("Fall Display Active");
  fallLaunch.disMissionLaunchDate();
}

class InputData {
  constructor(
    time_seconds,
    latitude,
    longitude,
    gps_altitude,
    bmpSensor_altitude,
    bmpSensor_pressure,
    bmpSensor_temp,
    digSensor_temp,
    cssSensor_temp,
    cssSensor_eCO2,
    cssSensor_TVOC,
    UV,
    accelX,
    accelY,
    accelZ,
    magnetX,
    magnetY,
    magnetZ,
    gyroX,
    gyroY,
    gyroZ
  ) {
    this.time_seconds = time_seconds;
    this.latitude = latitude;
    this.longitude = longitude;
    this.gps_altitude = gps_altitude;
    this.bmpSensor_altitude = bmpSensor_altitude;
    this.bmpSensor_pressure = bmpSensor_pressure;
    this.bmpSensor_temp = bmpSensor_temp;
    this.digSensor_temp = digSensor_temp;
    this.cssSensor_temp = cssSensor_temp;
    this.cssSensor_eCO2 = cssSensor_eCO2;
    this.cssSensor_TVOC = cssSensor_TVOC;
    this.UV = UV;
    this.accelX = accelX;
    this.accelY = accelY;
    this.accelZ = accelZ;
    this.magnetX = magnetX;
    this.magnetY = magnetY;
    this.magnetZ = magnetZ;
    this.gyroX = gyroX;
    this.gyroY = gyroY;
    this.gyroZ = gyroZ;
  }
}

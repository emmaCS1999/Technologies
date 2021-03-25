import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import EddystoneBeaconScanner from '@abandonware/eddystone-beacon-scanner'
import http from 'http'
import fetch from 'node-fetch'

const currentFolder = path.dirname(fileURLToPath(import.meta.url))


const app = express()



app.use('/', express.static(path.join(currentFolder, 'public')))

app.listen(3000, () => {
    console.log(`Listening at http://localhost:3000`)
})

var alert 
const filter = [
    'cbfc6512b49e'  //  ID of the beacon
]

 let showerOccupied = null;
 var duration;

 function update() {
   if (showerOccupied !=null) {       //logs the duration diffeerence, when it gets above a certain number then know there is an issue
     const duration = Date.now() - showerOccupied
     console.log(duration)

   }
 }
 
  
setInterval(update, 60 *1000)      //interval for the rate of updates from the sensor
//

var alert 
function send () {
if (duration > 100000) {
  alert = console.log("Alert")
}}

EddystoneBeaconScanner.on('updated', (beacon) => {           // get the sensor data from the microbit
  if (filter.join() && !filter.includes(beacon.id)) return
  const light = beacon.instance

    if (showerOccupied == null && light < 50) {  //if its wasnt occupied but is now
      showerOccupied = Date.now()
    }

    if (showerOccupied != null && light > 60) {   //if was occupied but isnt now 
      showerOccupied = null
    }
   
   if (duration > 5) {
      setInterval + console.log("Help required")       // a way to measure if the person has been on too long- need to make this a varibale(if duration is bigger than that then create varible alert, this is then sent)
   }
  })

EddystoneBeaconScanner.startScanning(true)



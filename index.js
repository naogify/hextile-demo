#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const hextile = require('hextile')

const japan = JSON.parse(fs.readFileSync(path.join(__dirname, 'kushimoto-outline.geojson')))

const features = hextile(japan, {shape: 'hexagon', width: 2000})

const exportGeoJSON = {
  "type": "FeatureCollection",
  "features": features,
}

// Write to hex.geojson file
fs.writeFileSync(path.join(__dirname, 'hex.geojson'), JSON.stringify(exportGeoJSON))

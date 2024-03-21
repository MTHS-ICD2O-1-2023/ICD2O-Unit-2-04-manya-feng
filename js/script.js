// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateAreaOfTriangle () {
  // input
  const baseOfTriangle = parseInt(document.getElementById('base-of-triangle').value)
  const heightOfTriangle = parseInt(document.getElementById('height-of-triangle').value)

  // process
  const areaOfTriangle = baseOfTriangle * heightOfTriangle

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + areaOfTriangle + ' cm²'
}

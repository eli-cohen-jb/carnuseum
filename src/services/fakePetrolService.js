const petrolPrices = [
  {
    "id": 1,
    "Country": "United States",
    "Daily Oil Consumption (Barrels)": 19687287,
    "World Share": "20.30%",
    "Yearly Gallons Per Capita": 934.3,
    "Price Per Gallon (USD)": 5.19,
    "Price Per Liter (USD)": 1.37,
    "Price Per Liter (PKR)": 289.97
  },
  {
    "id": 2,
    "Country": "China",
    "Daily Oil Consumption (Barrels)": 12791553,
    "World Share": "13.20%",
    "Yearly Gallons Per Capita": 138.7,
    "Price Per Gallon (USD)": 5.42,
    "Price Per Liter (USD)": 1.43,
    "Price Per Liter (PKR)": 302.87
  },
  {
    "id": 3,
    "Country": "India",
    "Daily Oil Consumption (Barrels)": 4443000,
    "World Share": "4.60%",
    "Yearly Gallons Per Capita": 51.4,
    "Price Per Gallon (USD)": 5.05,
    "Price Per Liter (USD)": 1.33,
    "Price Per Liter (PKR)": 281.93
  },
  {
    "id": 4,
    "Country": "Japan",
    "Daily Oil Consumption (Barrels)": 4012877,
    "World Share": "4.10%",
    "Yearly Gallons Per Capita": 481.5,
    "Price Per Gallon (USD)": 4.69,
    "Price Per Liter (USD)": 1.24,
    "Price Per Liter (PKR)": 262.05
  },
  {
    "id": 5,
    "Country": "Russia",
    "Daily Oil Consumption (Barrels)": 3631287,
    "World Share": "3.70%",
    "Yearly Gallons Per Capita": 383.2,
    "Price Per Gallon (USD)": 3.41,
    "Price Per Liter (USD)": 0.9,
    "Price Per Liter (PKR)": 190.56
  },
  {
    "id": 6,
    "Country": "Saudi Arabia",
    "Daily Oil Consumption (Barrels)": 3302000,
    "World Share": "3.40%",
    "Yearly Gallons Per Capita": 1560.2,
    "Price Per Gallon (USD)": 2.35,
    "Price Per Liter (USD)": 0.62,
    "Price Per Liter (PKR)": 131.34
  },
  {
    "id": 7,
    "Country": "Brazil",
    "Daily Oil Consumption (Barrels)": 2984000,
    "World Share": "3.10%",
    "Yearly Gallons Per Capita": 221.9,
    "Price Per Gallon (USD)": 5.36,
    "Price Per Liter (USD)": 1.42,
    "Price Per Liter (PKR)": 299.27
  },
  {
    "id": 8,
    "Country": "South Korea",
    "Daily Oil Consumption (Barrels)": 2605440,
    "World Share": "2.70%",
    "Yearly Gallons Per Capita": 783.4,
    "Price Per Gallon (USD)": 6.09,
    "Price Per Liter (USD)": 1.61,
    "Price Per Liter (PKR)": 340.52
  },
  {
    "id": 9,
    "Country": "Canada",
    "Daily Oil Consumption (Barrels)": 2486301,
    "World Share": "2.60%",
    "Yearly Gallons Per Capita": 1047.6,
    "Price Per Gallon (USD)": 6.76,
    "Price Per Liter (USD)": 1.79,
    "Price Per Liter (PKR)": 377.74
  },
  {
    "id": 10,
    "Country": "Germany",
    "Daily Oil Consumption (Barrels)": 2383393,
    "World Share": "2.50%",
    "Yearly Gallons Per Capita": 444.5,
    "Price Per Gallon (USD)": 7.65,
    "Price Per Liter (USD)": 2.02,
    "Price Per Liter (PKR)": 427.44
  },
  {
    "id": 11,
    "Country": "Mexico",
    "Daily Oil Consumption (Barrels)": 2052607,
    "World Share": "2.10%",
    "Yearly Gallons Per Capita": 255.1,
    "Price Per Gallon (USD)": 4.36,
    "Price Per Liter (USD)": 1.15,
    "Price Per Liter (PKR)": 243.44
  },
  {
    "id": 12,
    "Country": "Iran",
    "Daily Oil Consumption (Barrels)": 1803999,
    "World Share": "1.90%",
    "Yearly Gallons Per Capita": 347.6,
    "Price Per Gallon (USD)": 0.2,
    "Price Per Liter (USD)": 0.05,
    "Price Per Liter (PKR)": 11.21
  },
  {
    "id": 13,
    "Country": "France",
    "Daily Oil Consumption (Barrels)": 1705568,
    "World Share": "1.80%",
    "Yearly Gallons Per Capita": 404.3,
    "Price Per Gallon (USD)": 8.27,
    "Price Per Liter (USD)": 2.19,
    "Price Per Liter (PKR)": 462.13
  },
  {
    "id": 14,
    "Country": "Indonesia",
    "Daily Oil Consumption (Barrels)": 1623000,
    "World Share": "1.70%",
    "Yearly Gallons Per Capita": 95.1,
    "Price Per Gallon (USD)": 4.48,
    "Price Per Liter (USD)": 1.18,
    "Price Per Liter (PKR)": 250.42
  },
  {
    "id": 15,
    "Country": "United Kingdom",
    "Daily Oil Consumption (Barrels)": 1583896,
    "World Share": "1.60%",
    "Yearly Gallons Per Capita": 366.2,
    "Price Per Gallon (USD)": 8.38,
    "Price Per Liter (USD)": 2.22,
    "Price Per Liter (PKR)": 468.47
  },
  {
    "id": 16,
    "Country": "Singapore",
    "Daily Oil Consumption (Barrels)": 1357000,
    "World Share": "1.40%",
    "Yearly Gallons Per Capita": 3679.5,
    "Price Per Gallon (USD)": 8.71,
    "Price Per Liter (USD)": 2.3,
    "Price Per Liter (PKR)": 486.87
  },
  {
    "id": 17,
    "Country": "Thailand",
    "Daily Oil Consumption (Barrels)": 1302000,
    "World Share": "1.30%",
    "Yearly Gallons Per Capita": 289.4,
    "Price Per Gallon (USD)": 5.7,
    "Price Per Liter (USD)": 1.51,
    "Price Per Liter (PKR)": 318.73
  },
  {
    "id": 18,
    "Country": "Italy",
    "Daily Oil Consumption (Barrels)": 1236628,
    "World Share": "1.30%",
    "Yearly Gallons Per Capita": 312.5,
    "Price Per Gallon (USD)": 8.01,
    "Price Per Liter (USD)": 2.12,
    "Price Per Liter (PKR)": 447.53
  },
  {
    "id": 19,
    "Country": "Spain",
    "Daily Oil Consumption (Barrels)": 1290063,
    "World Share": "1.30%",
    "Yearly Gallons Per Capita": 424.1,
    "Price Per Gallon (USD)": 8.35,
    "Price Per Liter (USD)": 2.21,
    "Price Per Liter (PKR)": 466.57
  },
  {
    "id": 20,
    "Country": "Australia",
    "Daily Oil Consumption (Barrels)": 1114645,
    "World Share": "1.10%",
    "Yearly Gallons Per Capita": 704.3,
    "Price Per Gallon (USD)": 5.22,
    "Price Per Liter (USD)": 1.38,
    "Price Per Liter (PKR)": 291.45
  },
  {
    "id": 21,
    "Country": "Turkey",
    "Daily Oil Consumption (Barrels)": 941861,
    "World Share": "1.00%",
    "Yearly Gallons Per Capita": 180.9,
    "Price Per Gallon (USD)": 6.06,
    "Price Per Liter (USD)": 1.6,
    "Price Per Liter (PKR)": 338.4
  },
  {
    "id": 22,
    "Country": "Taiwan",
    "Daily Oil Consumption (Barrels)": 981203,
    "World Share": "1.00%",
    "Yearly Gallons Per Capita": 636.9,
    "Price Per Gallon (USD)": 3.94,
    "Price Per Liter (USD)": 1.04,
    "Price Per Liter (PKR)": 220.17
  },
  {
    "id": 23,
    "Country": "Netherlands",
    "Daily Oil Consumption (Barrels)": 937098,
    "World Share": "1.00%",
    "Yearly Gallons Per Capita": 846,
    "Price Per Gallon (USD)": 9.33,
    "Price Per Liter (USD)": 2.47,
    "Price Per Liter (PKR)": 521.35
  },
  {
    "id": 24,
    "Country": "Egypt",
    "Daily Oil Consumption (Barrels)": 877000,
    "World Share": "0.90%",
    "Yearly Gallons Per Capita": 142.3,
    "Price Per Gallon (USD)": 1.97,
    "Price Per Liter (USD)": 0.52,
    "Price Per Liter (PKR)": 110.19
  },
  {
    "id": 25,
    "Country": "Iraq",
    "Daily Oil Consumption (Barrels)": 857000,
    "World Share": "0.90%",
    "Yearly Gallons Per Capita": 358.9,
    "Price Per Gallon (USD)": 1.95,
    "Price Per Liter (USD)": 0.51,
    "Price Per Liter (PKR)": 108.71
  },
  {
    "id": 26,
    "Country": "United Arab Emirates",
    "Daily Oil Consumption (Barrels)": 896000,
    "World Share": "0.90%",
    "Yearly Gallons Per Capita": 1467.3,
    "Price Per Gallon (USD)": 4.15,
    "Price Per Liter (USD)": 1.1,
    "Price Per Liter (PKR)": 232.02
  },
  {
    "id": 27,
    "Country": "South Africa",
    "Daily Oil Consumption (Barrels)": 640000,
    "World Share": "0.70%",
    "Yearly Gallons Per Capita": 174.6,
    "Price Per Gallon (USD)": 5.59,
    "Price Per Liter (USD)": 1.48,
    "Price Per Liter (PKR)": 312.6
  },
  {
    "id": 28,
    "Country": "Argentina",
    "Daily Oil Consumption (Barrels)": 709000,
    "World Share": "0.70%",
    "Yearly Gallons Per Capita": 249.8,
    "Price Per Gallon (USD)": 3.96,
    "Price Per Liter (USD)": 1.05,
    "Price Per Liter (PKR)": 221.23
  },
  {
    "id": 29,
    "Country": "Malaysia",
    "Daily Oil Consumption (Barrels)": 708000,
    "World Share": "0.70%",
    "Yearly Gallons Per Capita": 353.7,
    "Price Per Gallon (USD)": 1.76,
    "Price Per Liter (USD)": 0.46,
    "Price Per Liter (PKR)": 98.14
  },
  {
    "id": 30,
    "Country": "Belgium",
    "Daily Oil Consumption (Barrels)": 631522,
    "World Share": "0.70%",
    "Yearly Gallons Per Capita": 852.6,
    "Price Per Gallon (USD)": 8.36,
    "Price Per Liter (USD)": 2.21,
    "Price Per Liter (PKR)": 466.99
  },
  {
    "id": 31,
    "Country": "Pakistan",
    "Daily Oil Consumption (Barrels)": 556000,
    "World Share": "0.60%",
    "Yearly Gallons Per Capita": 41.9,
    "Price Per Gallon (USD)": 3.9,
    "Price Per Liter (USD)": 1.03,
    "Price Per Liter (PKR)": 217.85
  },
  {
    "id": 32,
    "Country": "Poland",
    "Daily Oil Consumption (Barrels)": 582161,
    "World Share": "0.60%",
    "Yearly Gallons Per Capita": 234.9,
    "Price Per Gallon (USD)": 6.8,
    "Price Per Liter (USD)": 1.8,
    "Price Per Liter (PKR)": 380.07
  },
  {
    "id": 33,
    "Country": "Venezuela",
    "Daily Oil Consumption (Barrels)": 598000,
    "World Share": "0.60%",
    "Yearly Gallons Per Capita": 307.1,
    "Price Per Gallon (USD)": 0.08,
    "Price Per Liter (USD)": 0.02,
    "Price Per Liter (PKR)": 4.65
  },
  {
    "id": 34,
    "Country": "Vietnam",
    "Daily Oil Consumption (Barrels)": 478000,
    "World Share": "0.50%",
    "Yearly Gallons Per Capita": 78.3,
    "Price Per Gallon (USD)": 5.38,
    "Price Per Liter (USD)": 1.42,
    "Price Per Liter (PKR)": 300.75
  },
  {
    "id": 35,
    "Country": "Nigeria",
    "Daily Oil Consumption (Barrels)": 428000,
    "World Share": "0.40%",
    "Yearly Gallons Per Capita": 35.3,
    "Price Per Gallon (USD)": 1.57,
    "Price Per Liter (USD)": 0.42,
    "Price Per Liter (PKR)": 87.98
  },
  {
    "id": 36,
    "Country": "Philippines",
    "Daily Oil Consumption (Barrels)": 429000,
    "World Share": "0.40%",
    "Yearly Gallons Per Capita": 63.4,
    "Price Per Gallon (USD)": 5.88,
    "Price Per Liter (USD)": 1.55,
    "Price Per Liter (PKR)": 328.46
  },
  {
    "id": 37,
    "Country": "Colombia",
    "Daily Oil Consumption (Barrels)": 357000,
    "World Share": "0.40%",
    "Yearly Gallons Per Capita": 113.6,
    "Price Per Gallon (USD)": 2.28,
    "Price Per Liter (USD)": 0.6,
    "Price Per Liter (PKR)": 127.11
  },
  {
    "id": 38,
    "Country": "Algeria",
    "Daily Oil Consumption (Barrels)": 429000,
    "World Share": "0.40%",
    "Yearly Gallons Per Capita": 162.2,
    "Price Per Gallon (USD)": 1.18,
    "Price Per Liter (USD)": 0.31,
    "Price Per Liter (PKR)": 66.2
  },
  {
    "id": 39,
    "Country": "Chile",
    "Daily Oil Consumption (Barrels)": 351989,
    "World Share": "0.40%",
    "Yearly Gallons Per Capita": 296.3,
    "Price Per Gallon (USD)": 5.26,
    "Price Per Liter (USD)": 1.39,
    "Price Per Liter (PKR)": 293.77
  },
  {
    "id": 40,
    "Country": "Hong Kong",
    "Daily Oil Consumption (Barrels)": 408491,
    "World Share": "0.40%",
    "Yearly Gallons Per Capita": 864.5,
    "Price Per Gallon (USD)": 11.35,
    "Price Per Liter (USD)": 3,
    "Price Per Liter (PKR)": 634.29
  },
  {
    "id": 41,
    "Country": "Kuwait",
    "Daily Oil Consumption (Barrels)": 359000,
    "World Share": "0.40%",
    "Yearly Gallons Per Capita": 1390.9,
    "Price Per Gallon (USD)": 1.29,
    "Price Per Liter (USD)": 0.34,
    "Price Per Liter (PKR)": 72.33
  },
  {
    "id": 42,
    "Country": "Ukraine",
    "Daily Oil Consumption (Barrels)": 244000,
    "World Share": "0.30%",
    "Yearly Gallons Per Capita": 83.7,
    "Price Per Gallon (USD)": 6.44,
    "Price Per Liter (USD)": 1.7,
    "Price Per Liter (PKR)": 359.76
  },
  {
    "id": 43,
    "Country": "Morocco",
    "Daily Oil Consumption (Barrels)": 275000,
    "World Share": "0.30%",
    "Yearly Gallons Per Capita": 120,
    "Price Per Gallon (USD)": 6.36,
    "Price Per Liter (USD)": 1.68,
    "Price Per Liter (PKR)": 355.53
  },
  {
    "id": 44,
    "Country": "Peru",
    "Daily Oil Consumption (Barrels)": 246000,
    "World Share": "0.30%",
    "Yearly Gallons Per Capita": 121.9,
    "Price Per Gallon (USD)": 6.26,
    "Price Per Liter (USD)": 1.65,
    "Price Per Liter (PKR)": 349.82
  },
  {
    "id": 45,
    "Country": "Ecuador",
    "Daily Oil Consumption (Barrels)": 259000,
    "World Share": "0.30%",
    "Yearly Gallons Per Capita": 240.8,
    "Price Per Gallon (USD)": 4.43,
    "Price Per Liter (USD)": 1.17,
    "Price Per Liter (PKR)": 247.46
  },
  {
    "id": 46,
    "Country": "Kazakhstan",
    "Daily Oil Consumption (Barrels)": 325000,
    "World Share": "0.30%",
    "Yearly Gallons Per Capita": 279.4,
    "Price Per Gallon (USD)": 1.8,
    "Price Per Liter (USD)": 0.48,
    "Price Per Liter (PKR)": 100.46
  },
  {
    "id": 47,
    "Country": "Greece",
    "Daily Oil Consumption (Barrels)": 296101,
    "World Share": "0.30%",
    "Yearly Gallons Per Capita": 427.6,
    "Price Per Gallon (USD)": 9.49,
    "Price Per Liter (USD)": 2.51,
    "Price Per Liter (PKR)": 530.02
  },
  {
    "id": 48,
    "Country": "Austria",
    "Daily Oil Consumption (Barrels)": 262352,
    "World Share": "0.30%",
    "Yearly Gallons Per Capita": 459.8,
    "Price Per Gallon (USD)": 8.07,
    "Price Per Liter (USD)": 2.13,
    "Price Per Liter (PKR)": 450.92
  },
  {
    "id": 49,
    "Country": "Sweden",
    "Daily Oil Consumption (Barrels)": 322109,
    "World Share": "0.30%",
    "Yearly Gallons Per Capita": 502,
    "Price Per Gallon (USD)": 8.7,
    "Price Per Liter (USD)": 2.3,
    "Price Per Liter (PKR)": 486.24
  },
  {
    "id": 50,
    "Country": "Romania",
    "Daily Oil Consumption (Barrels)": 200000,
    "World Share": "0.20%",
    "Yearly Gallons Per Capita": 154.9,
    "Price Per Gallon (USD)": 6.87,
    "Price Per Liter (USD)": 1.82,
    "Price Per Liter (PKR)": 384.08
  },
  {
    "id": 51,
    "Country": "Cuba",
    "Daily Oil Consumption (Barrels)": 153000,
    "World Share": "0.20%",
    "Yearly Gallons Per Capita": 206.9,
    "Price Per Gallon (USD)": 4.77,
    "Price Per Liter (USD)": 1.26,
    "Price Per Liter (PKR)": 266.49
  },
  {
    "id": 52,
    "Country": "Hungary",
    "Daily Oil Consumption (Barrels)": 155544,
    "World Share": "0.20%",
    "Yearly Gallons Per Capita": 244.5,
    "Price Per Gallon (USD)": 7.6,
    "Price Per Liter (USD)": 2.01,
    "Price Per Liter (PKR)": 424.48
  },
  {
    "id": 53,
    "Country": "Czech Republic (Czechia)",
    "Daily Oil Consumption (Barrels)": 179956,
    "World Share": "0.20%",
    "Yearly Gallons Per Capita": 259.8,
    "Price Per Gallon (USD)": 7.56,
    "Price Per Liter (USD)": 2,
    "Price Per Liter (PKR)": 422.15
  },
  {
    "id": 54,
    "Country": "Lebanon",
    "Daily Oil Consumption (Barrels)": 153000,
    "World Share": "0.20%",
    "Yearly Gallons Per Capita": 349.3,
    "Price Per Gallon (USD)": 5.41,
    "Price Per Liter (USD)": 1.43,
    "Price Per Liter (PKR)": 302.23
  },
  {
    "id": 55,
    "Country": "Portugal",
    "Daily Oil Consumption (Barrels)": 236866,
    "World Share": "0.20%",
    "Yearly Gallons Per Capita": 351.7,
    "Price Per Gallon (USD)": 8.55,
    "Price Per Liter (USD)": 2.26,
    "Price Per Liter (PKR)": 477.78
  },
  {
    "id": 56,
    "Country": "Turkmenistan",
    "Daily Oil Consumption (Barrels)": 149000,
    "World Share": "0.20%",
    "Yearly Gallons Per Capita": 403.4,
    "Price Per Gallon (USD)": 1.62,
    "Price Per Liter (USD)": 0.43,
    "Price Per Liter (PKR)": 90.52
  },
  {
    "id": 57,
    "Country": "Switzerland",
    "Daily Oil Consumption (Barrels)": 228194,
    "World Share": "0.20%",
    "Yearly Gallons Per Capita": 417.5,
    "Price Per Gallon (USD)": 8.27,
    "Price Per Liter (USD)": 2.19,
    "Price Per Liter (PKR)": 462.34
  },
  {
    "id": 58,
    "Country": "Denmark",
    "Daily Oil Consumption (Barrels)": 158194,
    "World Share": "0.20%",
    "Yearly Gallons Per Capita": 424.6,
    "Price Per Gallon (USD)": 10.04,
    "Price Per Liter (USD)": 2.65,
    "Price Per Liter (PKR)": 561.11
  },
  {
    "id": 59,
    "Country": "Israel",
    "Daily Oil Consumption (Barrels)": 236249,
    "World Share": "0.20%",
    "Yearly Gallons Per Capita": 446.6,
    "Price Per Gallon (USD)": 7.94,
    "Price Per Liter (USD)": 2.1,
    "Price Per Liter (PKR)": 443.73
  },
  {
    "id": 60,
    "Country": "Ireland",
    "Daily Oil Consumption (Barrels)": 152404,
    "World Share": "0.20%",
    "Yearly Gallons Per Capita": 497.5,
    "Price Per Gallon (USD)": 7.84,
    "Price Per Liter (USD)": 2.07,
    "Price Per Liter (PKR)": 437.81
  },
  {
    "id": 61,
    "Country": "Libya",
    "Daily Oil Consumption (Barrels)": 223000,
    "World Share": "0.20%",
    "Yearly Gallons Per Capita": 526.6,
    "Price Per Gallon (USD)": 0.12,
    "Price Per Liter (USD)": 0.03,
    "Price Per Liter (PKR)": 6.56
  },
  {
    "id": 62,
    "Country": "New Zealand",
    "Daily Oil Consumption (Barrels)": 166913,
    "World Share": "0.20%",
    "Yearly Gallons Per Capita": 549.2,
    "Price Per Gallon (USD)": 7.82,
    "Price Per Liter (USD)": 2.07,
    "Price Per Liter (PKR)": 436.75
  },
  {
    "id": 63,
    "Country": "Finland",
    "Daily Oil Consumption (Barrels)": 210030,
    "World Share": "0.20%",
    "Yearly Gallons Per Capita": 585.7,
    "Price Per Gallon (USD)": 10.01,
    "Price Per Liter (USD)": 2.64,
    "Price Per Liter (PKR)": 559.21
  },
  {
    "id": 64,
    "Country": "Panama",
    "Daily Oil Consumption (Barrels)": 155000,
    "World Share": "0.20%",
    "Yearly Gallons Per Capita": 588.6,
    "Price Per Gallon (USD)": 5.49,
    "Price Per Liter (USD)": 1.45,
    "Price Per Liter (PKR)": 306.68
  },
  {
    "id": 65,
    "Country": "Norway",
    "Daily Oil Consumption (Barrels)": 204090,
    "World Share": "0.20%",
    "Yearly Gallons Per Capita": 595.8,
    "Price Per Gallon (USD)": 10.22,
    "Price Per Liter (USD)": 2.7,
    "Price Per Liter (PKR)": 571.26
  },
  {
    "id": 66,
    "Country": "Oman",
    "Daily Oil Consumption (Barrels)": 183000,
    "World Share": "0.20%",
    "Yearly Gallons Per Capita": 626.3,
    "Price Per Gallon (USD)": 2.35,
    "Price Per Liter (USD)": 0.62,
    "Price Per Liter (PKR)": 131.34
  },
  {
    "id": 67,
    "Country": "Qatar",
    "Daily Oil Consumption (Barrels)": 172000,
    "World Share": "0.20%",
    "Yearly Gallons Per Capita": 993.4,
    "Price Per Gallon (USD)": 2.18,
    "Price Per Liter (USD)": 0.58,
    "Price Per Liter (PKR)": 121.82
  },
  {
    "id": 68,
    "Country": "Bangladesh",
    "Daily Oil Consumption (Barrels)": 113000,
    "World Share": "0.10%",
    "Yearly Gallons Per Capita": 11,
    "Price Per Gallon (USD)": 3.59,
    "Price Per Liter (USD)": 0.95,
    "Price Per Liter (PKR)": 200.5
  },
  {
    "id": 69,
    "Country": "Myanmar",
    "Daily Oil Consumption (Barrels)": 123000,
    "World Share": "0.10%",
    "Yearly Gallons Per Capita": 35.5,
    "Price Per Gallon (USD)": 4.75,
    "Price Per Liter (USD)": 1.26,
    "Price Per Liter (PKR)": 265.43
  },
  {
    "id": 70,
    "Country": "Kenya",
    "Daily Oil Consumption (Barrels)": 114000,
    "World Share": "0.10%",
    "Yearly Gallons Per Capita": 35.6,
    "Price Per Gallon (USD)": 5.14,
    "Price Per Liter (USD)": 1.36,
    "Price Per Liter (PKR)": 287.01
  },
  {
    "id": 71,
    "Country": "Sudan",
    "Daily Oil Consumption (Barrels)": 140000,
    "World Share": "0.10%",
    "Yearly Gallons Per Capita": 53.9,
    "Price Per Gallon (USD)": 4.8,
    "Price Per Liter (USD)": 1.27,
    "Price Per Liter (PKR)": 268.18
  },
  {
    "id": 72,
    "Country": "Angola",
    "Daily Oil Consumption (Barrels)": 133000,
    "World Share": "0.10%",
    "Yearly Gallons Per Capita": 70.7,
    "Price Per Gallon (USD)": 1.39,
    "Price Per Liter (USD)": 0.37,
    "Price Per Liter (PKR)": 77.83
  },
  {
    "id": 73,
    "Country": "Sri Lanka",
    "Daily Oil Consumption (Barrels)": 127000,
    "World Share": "0.10%",
    "Yearly Gallons Per Capita": 92.6,
    "Price Per Gallon (USD)": 4.75,
    "Price Per Liter (USD)": 1.26,
    "Price Per Liter (PKR)": 265.43
  },
  {
    "id": 74,
    "Country": "Syria",
    "Daily Oil Consumption (Barrels)": 140000,
    "World Share": "0.10%",
    "Yearly Gallons Per Capita": 122.9,
    "Price Per Gallon (USD)": 1.08,
    "Price Per Liter (USD)": 0.29,
    "Price Per Liter (PKR)": 60.49
  },
  {
    "id": 75,
    "Country": "Tunisia",
    "Daily Oil Consumption (Barrels)": 97000,
    "World Share": "0.10%",
    "Yearly Gallons Per Capita": 131.5,
    "Price Per Gallon (USD)": 2.86,
    "Price Per Liter (USD)": 0.76,
    "Price Per Liter (PKR)": 159.68
  },
  {
    "id": 76,
    "Country": "Jordan",
    "Daily Oil Consumption (Barrels)": 114000,
    "World Share": "0.10%",
    "Yearly Gallons Per Capita": 182.9,
    "Price Per Gallon (USD)": 6.3,
    "Price Per Liter (USD)": 1.66,
    "Price Per Liter (PKR)": 351.94
  },
  {
    "id": 77,
    "Country": "Dominican Republic",
    "Daily Oil Consumption (Barrels)": 133000,
    "World Share": "0.10%",
    "Yearly Gallons Per Capita": 196.1,
    "Price Per Gallon (USD)": 5.33,
    "Price Per Liter (USD)": 1.41,
    "Price Per Liter (PKR)": 298
  },
  {
    "id": 78,
    "Country": "Bulgaria",
    "Daily Oil Consumption (Barrels)": 97000,
    "World Share": "0.10%",
    "Yearly Gallons Per Capita": 207.9,
    "Price Per Gallon (USD)": 6.53,
    "Price Per Liter (USD)": 1.72,
    "Price Per Liter (PKR)": 364.63
  },
  {
    "id": 79,
    "Country": "Belarus",
    "Daily Oil Consumption (Barrels)": 137000,
    "World Share": "0.10%",
    "Yearly Gallons Per Capita": 222.3,
    "Price Per Gallon (USD)": 2.67,
    "Price Per Liter (USD)": 0.71,
    "Price Per Liter (PKR)": 149.11
  },
  {
    "id": 80,
    "Country": "Puerto Rico",
    "Daily Oil Consumption (Barrels)": 96746,
    "World Share": "0.10%",
    "Yearly Gallons Per Capita": 451.7,
    "Price Per Gallon (USD)": 5.41,
    "Price Per Liter (USD)": 1.43,
    "Price Per Liter (PKR)": 302.23
  },
  {
    "id": 81,
    "Country": "Azerbaijan",
    "Daily Oil Consumption (Barrels)": 96000,
    "World Share": "0.10%",
    "Yearly Gallons Per Capita": 151.2,
    "Price Per Gallon (USD)": 2.23,
    "Price Per Liter (USD)": 0.59,
    "Price Per Liter (PKR)": 124.36
  },
  {
    "id": 82,
    "Country": "Guatemala",
    "Daily Oil Consumption (Barrels)": 93000,
    "World Share": "0.10%",
    "Yearly Gallons Per Capita": 86,
    "Price Per Gallon (USD)": 5.14,
    "Price Per Liter (USD)": 1.36,
    "Price Per Liter (PKR)": 287.01
  },
  {
    "id": 83,
    "Country": "Bolivia",
    "Daily Oil Consumption (Barrels)": 90000,
    "World Share": "0.09%",
    "Yearly Gallons Per Capita": 125.1,
    "Price Per Gallon (USD)": 2.06,
    "Price Per Liter (USD)": 0.54,
    "Price Per Liter (PKR)": 115.06
  },
  {
    "id": 84,
    "Country": "Ghana",
    "Daily Oil Consumption (Barrels)": 88000,
    "World Share": "0.09%",
    "Yearly Gallons Per Capita": 47.4,
    "Price Per Gallon (USD)": 4.87,
    "Price Per Liter (USD)": 1.29,
    "Price Per Liter (PKR)": 271.99
  },
  {
    "id": 85,
    "Country": "Slovakia",
    "Daily Oil Consumption (Barrels)": 81587,
    "World Share": "0.08%",
    "Yearly Gallons Per Capita": 229.8,
    "Price Per Gallon (USD)": 7.5,
    "Price Per Liter (USD)": 1.98,
    "Price Per Liter (PKR)": 418.98
  },
  {
    "id": 86,
    "Country": "Ethiopia",
    "Daily Oil Consumption (Barrels)": 74000,
    "World Share": "0.08%",
    "Yearly Gallons Per Capita": 10.9,
    "Price Per Gallon (USD)": 2.7,
    "Price Per Liter (USD)": 0.71,
    "Price Per Liter (PKR)": 150.59
  },
  {
    "id": 87,
    "Country": "Serbia",
    "Daily Oil Consumption (Barrels)": 74000,
    "World Share": "0.08%",
    "Yearly Gallons Per Capita": 128.1,
    "Price Per Gallon (USD)": 6.64,
    "Price Per Liter (USD)": 1.76,
    "Price Per Liter (PKR)": 371.18
  },
  {
    "id": 88,
    "Country": "Tanzania",
    "Daily Oil Consumption (Barrels)": 71999,
    "World Share": "0.07%",
    "Yearly Gallons Per Capita": 20.8,
    "Price Per Gallon (USD)": 4.86,
    "Price Per Liter (USD)": 1.28,
    "Price Per Liter (PKR)": 271.57
  },
  {
    "id": 89,
    "Country": "Croatia",
    "Daily Oil Consumption (Barrels)": 69000,
    "World Share": "0.07%",
    "Yearly Gallons Per Capita": 251.3,
    "Price Per Gallon (USD)": 7.24,
    "Price Per Liter (USD)": 1.91,
    "Price Per Liter (PKR)": 404.39
  },
  {
    "id": 90,
    "Country": "Bahrain",
    "Daily Oil Consumption (Barrels)": 62000,
    "World Share": "0.06%",
    "Yearly Gallons Per Capita": 666.6,
    "Price Per Gallon (USD)": 2.01,
    "Price Per Liter (USD)": 0.53,
    "Price Per Liter (PKR)": 112.31
  },
  {
    "id": 91,
    "Country": "Lithuania",
    "Daily Oil Consumption (Barrels)": 61612,
    "World Share": "0.06%",
    "Yearly Gallons Per Capita": 326.9,
    "Price Per Gallon (USD)": 8.11,
    "Price Per Liter (USD)": 2.14,
    "Price Per Liter (PKR)": 453.24
  },
  {
    "id": 92,
    "Country": "Yemen",
    "Daily Oil Consumption (Barrels)": 60000,
    "World Share": "0.06%",
    "Yearly Gallons Per Capita": 33.9,
    "Price Per Gallon (USD)": 1.96,
    "Price Per Liter (USD)": 0.52,
    "Price Per Liter (PKR)": 109.35
  },
  {
    "id": 93,
    "Country": "Honduras",
    "Daily Oil Consumption (Barrels)": 58000,
    "World Share": "0.06%",
    "Yearly Gallons Per Capita": 95.9,
    "Price Per Gallon (USD)": 5.49,
    "Price Per Liter (USD)": 1.45,
    "Price Per Liter (PKR)": 306.46
  },
  {
    "id": 94,
    "Country": "Trinidad and Tobago",
    "Daily Oil Consumption (Barrels)": 57000,
    "World Share": "0.06%",
    "Yearly Gallons Per Capita": 634.3,
    "Price Per Gallon (USD)": 3.76,
    "Price Per Liter (USD)": 0.99,
    "Price Per Liter (PKR)": 210.02
  },
  {
    "id": 95,
    "Country": "Luxembourg",
    "Daily Oil Consumption (Barrels)": 56194,
    "World Share": "0.06%",
    "Yearly Gallons Per Capita": 1487.2,
    "Price Per Gallon (USD)": 7.91,
    "Price Per Liter (USD)": 2.09,
    "Price Per Liter (PKR)": 441.82
  },
  {
    "id": 96,
    "Country": "Costa Rica",
    "Daily Oil Consumption (Barrels)": 55000,
    "World Share": "0.06%",
    "Yearly Gallons Per Capita": 172.1,
    "Price Per Gallon (USD)": 5.87,
    "Price Per Liter (USD)": 1.55,
    "Price Per Liter (PKR)": 327.83
  },
  {
    "id": 97,
    "Country": "Jamaica",
    "Daily Oil Consumption (Barrels)": 54000,
    "World Share": "0.06%",
    "Yearly Gallons Per Capita": 284.8,
    "Price Per Gallon (USD)": 6.36,
    "Price Per Liter (USD)": 1.68,
    "Price Per Liter (PKR)": 355.32
  },
  {
    "id": 98,
    "Country": "Uruguay",
    "Daily Oil Consumption (Barrels)": 53000,
    "World Share": "0.06%",
    "Yearly Gallons Per Capita": 237.3,
    "Price Per Gallon (USD)": 7.64,
    "Price Per Liter (USD)": 2.02,
    "Price Per Liter (PKR)": 427.02
  },
  {
    "id": 99,
    "Country": "El Salvador",
    "Daily Oil Consumption (Barrels)": 52000,
    "World Share": "0.05%",
    "Yearly Gallons Per Capita": 125.4,
    "Price Per Gallon (USD)": 4.31,
    "Price Per Liter (USD)": 1.14,
    "Price Per Liter (PKR)": 240.9
  },
  {
    "id": 100,
    "Country": "Slovenia",
    "Daily Oil Consumption (Barrels)": 52298,
    "World Share": "0.05%",
    "Yearly Gallons Per Capita": 386.5,
    "Price Per Gallon (USD)": 6.15,
    "Price Per Liter (USD)": 1.62,
    "Price Per Liter (PKR)": 343.48
  },
  {
    "id": 101,
    "Country": "Cyprus",
    "Daily Oil Consumption (Barrels)": 52000,
    "World Share": "0.05%",
    "Yearly Gallons Per Capita": 681.2,
    "Price Per Gallon (USD)": 7.04,
    "Price Per Liter (USD)": 1.86,
    "Price Per Liter (PKR)": 393.18
  },
  {
    "id": 102,
    "Country": "C�te d'Ivoire",
    "Daily Oil Consumption (Barrels)": 51000,
    "World Share": "0.05%",
    "Yearly Gallons Per Capita": 32.8,
    "Price Per Gallon (USD)": 4.47,
    "Price Per Liter (USD)": 1.18,
    "Price Per Liter (PKR)": 249.57
  },
  {
    "id": 103,
    "Country": "Paraguay",
    "Daily Oil Consumption (Barrels)": 51000,
    "World Share": "0.05%",
    "Yearly Gallons Per Capita": 115.4,
    "Price Per Gallon (USD)": 5.3,
    "Price Per Liter (USD)": 1.4,
    "Price Per Liter (PKR)": 295.89
  },
  {
    "id": 104,
    "Country": "Uzbekistan",
    "Daily Oil Consumption (Barrels)": 49000,
    "World Share": "0.05%",
    "Yearly Gallons Per Capita": 23.9,
    "Price Per Gallon (USD)": 3.39,
    "Price Per Liter (USD)": 0.9,
    "Price Per Liter (PKR)": 189.29
  },
  {
    "id": 105,
    "Country": "Senegal",
    "Daily Oil Consumption (Barrels)": 49000,
    "World Share": "0.05%",
    "Yearly Gallons Per Capita": 50.1,
    "Price Per Gallon (USD)": 5.39,
    "Price Per Liter (USD)": 1.42,
    "Price Per Liter (PKR)": 300.96
  },
  {
    "id": 106,
    "Country": "Cambodia",
    "Daily Oil Consumption (Barrels)": 48000,
    "World Share": "0.05%",
    "Yearly Gallons Per Capita": 46.7,
    "Price Per Gallon (USD)": 5.78,
    "Price Per Liter (USD)": 1.53,
    "Price Per Liter (PKR)": 322.96
  },
  {
    "id": 107,
    "Country": "Malta",
    "Daily Oil Consumption (Barrels)": 47000,
    "World Share": "0.05%",
    "Yearly Gallons Per Capita": 1652.2,
    "Price Per Gallon (USD)": 5.28,
    "Price Per Liter (USD)": 1.4,
    "Price Per Liter (PKR)": 295.04
  },
  {
    "id": 108,
    "Country": "Nepal",
    "Daily Oil Consumption (Barrels)": 43000,
    "World Share": "0.04%",
    "Yearly Gallons Per Capita": 24.2,
    "Price Per Gallon (USD)": 5.39,
    "Price Per Liter (USD)": 1.42,
    "Price Per Liter (PKR)": 301.18
  },
  {
    "id": 109,
    "Country": "Mozambique",
    "Daily Oil Consumption (Barrels)": 40000,
    "World Share": "0.04%",
    "Yearly Gallons Per Capita": 22,
    "Price Per Gallon (USD)": 4.94,
    "Price Per Liter (USD)": 1.3,
    "Price Per Liter (PKR)": 275.8
  },
  {
    "id": 110,
    "Country": "Cameroon",
    "Daily Oil Consumption (Barrels)": 40000,
    "World Share": "0.04%",
    "Yearly Gallons Per Capita": 25.6,
    "Price Per Gallon (USD)": 3.93,
    "Price Per Liter (USD)": 1.04,
    "Price Per Liter (PKR)": 219.33
  },
  {
    "id": 111,
    "Country": "Kyrgyzstan",
    "Daily Oil Consumption (Barrels)": 40000,
    "World Share": "0.04%",
    "Yearly Gallons Per Capita": 100.9,
    "Price Per Gallon (USD)": 3.14,
    "Price Per Liter (USD)": 0.83,
    "Price Per Liter (PKR)": 175.55
  },
  {
    "id": 112,
    "Country": "Latvia",
    "Daily Oil Consumption (Barrels)": 37694,
    "World Share": "0.04%",
    "Yearly Gallons Per Capita": 292.7,
    "Price Per Gallon (USD)": 8.28,
    "Price Per Liter (USD)": 2.19,
    "Price Per Liter (PKR)": 462.55
  },
  {
    "id": 113,
    "Country": "Papua New Guinea",
    "Daily Oil Consumption (Barrels)": 37001,
    "World Share": "0.04%",
    "Yearly Gallons Per Capita": 68.6,
    "Price Per Gallon (USD)": 5.87,
    "Price Per Liter (USD)": 1.55,
    "Price Per Liter (PKR)": 327.83
  },
  {
    "id": 114,
    "Country": "Nicaragua",
    "Daily Oil Consumption (Barrels)": 37000,
    "World Share": "0.04%",
    "Yearly Gallons Per Capita": 90,
    "Price Per Gallon (USD)": 5.18,
    "Price Per Liter (USD)": 1.37,
    "Price Per Liter (PKR)": 289.54
  },
  {
    "id": 115,
    "Country": "Benin",
    "Daily Oil Consumption (Barrels)": 36000,
    "World Share": "0.04%",
    "Yearly Gallons Per Capita": 50.8,
    "Price Per Gallon (USD)": 3.63,
    "Price Per Liter (USD)": 0.96,
    "Price Per Liter (PKR)": 202.83
  },
  {
    "id": 116,
    "Country": "Afghanistan",
    "Daily Oil Consumption (Barrels)": 35000,
    "World Share": "0.04%",
    "Yearly Gallons Per Capita": 15.2,
    "Price Per Gallon (USD)": 3.62,
    "Price Per Liter (USD)": 0.96,
    "Price Per Liter (PKR)": 201.98
  },
  {
    "id": 117,
    "Country": "Bosnia and Herzegovina",
    "Daily Oil Consumption (Barrels)": 35000,
    "World Share": "0.04%",
    "Yearly Gallons Per Capita": 158.4,
    "Price Per Gallon (USD)": 6.55,
    "Price Per Liter (USD)": 1.73,
    "Price Per Liter (PKR)": 366.11
  },
  {
    "id": 118,
    "Country": "Georgia",
    "Daily Oil Consumption (Barrels)": 33000,
    "World Share": "0.03%",
    "Yearly Gallons Per Capita": 126,
    "Price Per Gallon (USD)": 5.04,
    "Price Per Liter (USD)": 1.33,
    "Price Per Liter (PKR)": 281.51
  },
  {
    "id": 119,
    "Country": "Uganda",
    "Daily Oil Consumption (Barrels)": 32001,
    "World Share": "0.03%",
    "Yearly Gallons Per Capita": 12.4,
    "Price Per Gallon (USD)": 5.7,
    "Price Per Liter (USD)": 1.51,
    "Price Per Liter (PKR)": 318.52
  },
  {
    "id": 120,
    "Country": "Estonia",
    "Daily Oil Consumption (Barrels)": 28855,
    "World Share": "0.03%",
    "Yearly Gallons Per Capita": 336,
    "Price Per Gallon (USD)": 8.35,
    "Price Per Liter (USD)": 2.21,
    "Price Per Liter (PKR)": 466.57
  },
  {
    "id": 121,
    "Country": "Mauritius",
    "Daily Oil Consumption (Barrels)": 28000,
    "World Share": "0.03%",
    "Yearly Gallons Per Capita": 340.2,
    "Price Per Gallon (USD)": 6.36,
    "Price Per Liter (USD)": 1.68,
    "Price Per Liter (PKR)": 355.32
  },
  {
    "id": 122,
    "Country": "Albania",
    "Daily Oil Consumption (Barrels)": 27000,
    "World Share": "0.03%",
    "Yearly Gallons Per Capita": 143.4,
    "Price Per Gallon (USD)": 8,
    "Price Per Liter (USD)": 2.11,
    "Price Per Liter (PKR)": 447.11
  },
  {
    "id": 123,
    "Country": "Namibia",
    "Daily Oil Consumption (Barrels)": 26000,
    "World Share": "0.03%",
    "Yearly Gallons Per Capita": 169,
    "Price Per Gallon (USD)": 4.8,
    "Price Per Liter (USD)": 1.27,
    "Price Per Liter (PKR)": 268.18
  },
  {
    "id": 124,
    "Country": "Zimbabwe",
    "Daily Oil Consumption (Barrels)": 24000,
    "World Share": "0.03%",
    "Yearly Gallons Per Capita": 26.2,
    "Price Per Gallon (USD)": 6.13,
    "Price Per Liter (USD)": 1.62,
    "Price Per Liter (PKR)": 342.42
  },
  {
    "id": 125,
    "Country": "State of Palestine",
    "Daily Oil Consumption (Barrels)": 24001,
    "World Share": "0.03%",
    "Yearly Gallons Per Capita": 79.4,
    "Price Per Gallon (USD)": 6.62,
    "Price Per Liter (USD)": 1.75,
    "Price Per Liter (PKR)": 370.13
  },
  {
    "id": 126,
    "Country": "Burkina Faso",
    "Daily Oil Consumption (Barrels)": 23000,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 18.9,
    "Price Per Gallon (USD)": 4.33,
    "Price Per Liter (USD)": 1.14,
    "Price Per Liter (PKR)": 241.74
  },
  {
    "id": 127,
    "Country": "Haiti",
    "Daily Oil Consumption (Barrels)": 23000,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 32.5,
    "Price Per Gallon (USD)": 2.18,
    "Price Per Liter (USD)": 0.58,
    "Price Per Liter (PKR)": 122.04
  },
  {
    "id": 128,
    "Country": "Mali",
    "Daily Oil Consumption (Barrels)": 21999,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 18.8,
    "Price Per Gallon (USD)": 4.61,
    "Price Per Liter (USD)": 1.22,
    "Price Per Liter (PKR)": 257.61
  },
  {
    "id": 129,
    "Country": "Zambia",
    "Daily Oil Consumption (Barrels)": 22000,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 20.6,
    "Price Per Gallon (USD)": 5.59,
    "Price Per Liter (USD)": 1.48,
    "Price Per Liter (PKR)": 312.6
  },
  {
    "id": 130,
    "Country": "DR Congo",
    "Daily Oil Consumption (Barrels)": 21000,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 4.1,
    "Price Per Gallon (USD)": 4.43,
    "Price Per Liter (USD)": 1.17,
    "Price Per Liter (PKR)": 247.46
  },
  {
    "id": 131,
    "Country": "Tajikistan",
    "Daily Oil Consumption (Barrels)": 21000,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 37.2,
    "Price Per Gallon (USD)": 5.94,
    "Price Per Liter (USD)": 1.57,
    "Price Per Liter (PKR)": 332.06
  },
  {
    "id": 132,
    "Country": "Mongolia",
    "Daily Oil Consumption (Barrels)": 21000,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 105.3,
    "Price Per Gallon (USD)": 4.67,
    "Price Per Liter (USD)": 1.23,
    "Price Per Liter (PKR)": 260.78
  },
  {
    "id": 133,
    "Country": "Botswana",
    "Daily Oil Consumption (Barrels)": 21000,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 149,
    "Price Per Gallon (USD)": 4.29,
    "Price Per Liter (USD)": 1.13,
    "Price Per Liter (PKR)": 239.42
  },
  {
    "id": 134,
    "Country": "North Macedonia",
    "Daily Oil Consumption (Barrels)": 21000,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 154.7,
    "Price Per Gallon (USD)": 7.12,
    "Price Per Liter (USD)": 1.88,
    "Price Per Liter (PKR)": 397.62
  },
  {
    "id": 135,
    "Country": "Gabon",
    "Daily Oil Consumption (Barrels)": 21000,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 160.3,
    "Price Per Gallon (USD)": 3.65,
    "Price Per Liter (USD)": 0.97,
    "Price Per Liter (PKR)": 204.1
  },
  {
    "id": 136,
    "Country": "Bahamas",
    "Daily Oil Consumption (Barrels)": 20036,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 812.7,
    "Price Per Gallon (USD)": 6.48,
    "Price Per Liter (USD)": 1.71,
    "Price Per Liter (PKR)": 361.88
  },
  {
    "id": 137,
    "Country": "New Caledonia",
    "Daily Oil Consumption (Barrels)": 20000,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 1118.2,
    "Price Per Gallon (USD)": 8.19,
    "Price Per Liter (USD)": 2.16,
    "Price Per Liter (PKR)": 457.47
  },
  {
    "id": 138,
    "Country": "Guinea",
    "Daily Oil Consumption (Barrels)": 19001,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 24.8,
    "Price Per Gallon (USD)": 5.13,
    "Price Per Liter (USD)": 1.36,
    "Price Per Liter (PKR)": 286.79
  },
  {
    "id": 139,
    "Country": "Iceland",
    "Daily Oil Consumption (Barrels)": 19090,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 880.9,
    "Price Per Gallon (USD)": 9.83,
    "Price Per Liter (USD)": 2.6,
    "Price Per Liter (PKR)": 549.48
  },
  {
    "id": 140,
    "Country": "North Korea",
    "Daily Oil Consumption (Barrels)": 18000,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 10.9,
    "Price Per Gallon (USD)": 54.89,
    "Price Per Liter (USD)": 14.5,
    "Price Per Liter (PKR)": 3066.75
  },
  {
    "id": 141,
    "Country": "Madagascar",
    "Daily Oil Consumption (Barrels)": 18000,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 11.1,
    "Price Per Gallon (USD)": 3.86,
    "Price Per Liter (USD)": 1.02,
    "Price Per Liter (PKR)": 215.94
  },
  {
    "id": 142,
    "Country": "Laos",
    "Daily Oil Consumption (Barrels)": 18000,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 40.3,
    "Price Per Gallon (USD)": 7.23,
    "Price Per Liter (USD)": 1.91,
    "Price Per Liter (PKR)": 403.75
  },
  {
    "id": 143,
    "Country": "Moldova",
    "Daily Oil Consumption (Barrels)": 18001,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 67.9,
    "Price Per Gallon (USD)": 6.75,
    "Price Per Liter (USD)": 1.78,
    "Price Per Liter (PKR)": 376.89
  },
  {
    "id": 144,
    "Country": "Congo",
    "Daily Oil Consumption (Barrels)": 17000,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 52.3,
    "Price Per Gallon (USD)": 3.94,
    "Price Per Liter (USD)": 1.04,
    "Price Per Liter (PKR)": 219.96
  },
  {
    "id": 145,
    "Country": "Macao",
    "Daily Oil Consumption (Barrels)": 17110,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 428,
    "Price Per Gallon (USD)": 5.42,
    "Price Per Liter (USD)": 1.43,
    "Price Per Liter (PKR)": 302.87
  },
  {
    "id": 146,
    "Country": "Fiji",
    "Daily Oil Consumption (Barrels)": 16000,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 281.2,
    "Price Per Gallon (USD)": 5.27,
    "Price Per Liter (USD)": 1.39,
    "Price Per Liter (PKR)": 294.41
  },
  {
    "id": 147,
    "Country": "Brunei",
    "Daily Oil Consumption (Barrels)": 16000,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 584.3,
    "Price Per Gallon (USD)": 0.83,
    "Price Per Liter (USD)": 0.22,
    "Price Per Liter (PKR)": 46.53
  },
  {
    "id": 148,
    "Country": "Togo",
    "Daily Oil Consumption (Barrels)": 15000,
    "World Share": "0.02%",
    "Yearly Gallons Per Capita": 30.6,
    "Price Per Gallon (USD)": 3.18,
    "Price Per Liter (USD)": 0.84,
    "Price Per Liter (PKR)": 177.45
  },
  {
    "id": 149,
    "Country": "Guyana",
    "Daily Oil Consumption (Barrels)": 14000,
    "World Share": "0.01%",
    "Yearly Gallons Per Capita": 278.2,
    "Price Per Gallon (USD)": 4.6,
    "Price Per Liter (USD)": 1.22,
    "Price Per Liter (PKR)": 257.18
  },
  {
    "id": 150,
    "Country": "Suriname",
    "Daily Oil Consumption (Barrels)": 13000,
    "World Share": "0.01%",
    "Yearly Gallons Per Capita": 352.8,
    "Price Per Gallon (USD)": 4.26,
    "Price Per Liter (USD)": 1.13,
    "Price Per Liter (PKR)": 237.94
  },
  {
    "id": 151,
    "Country": "Maldives",
    "Daily Oil Consumption (Barrels)": 11000,
    "World Share": "0.01%",
    "Yearly Gallons Per Capita": 354.6,
    "Price Per Gallon (USD)": 3.6,
    "Price Per Liter (USD)": 0.95,
    "Price Per Liter (PKR)": 201.14
  },
  {
    "id": 152,
    "Country": "Barbados",
    "Daily Oil Consumption (Barrels)": 11001,
    "World Share": "0.01%",
    "Yearly Gallons Per Capita": 590.1,
    "Price Per Gallon (USD)": 8.27,
    "Price Per Liter (USD)": 2.18,
    "Price Per Liter (PKR)": 461.92
  },
  {
    "id": 153,
    "Country": "South Sudan",
    "Daily Oil Consumption (Barrels)": 8001,
    "World Share": "0.01%",
    "Yearly Gallons Per Capita": 11.3,
    "Price Per Gallon (USD)": 4.8,
    "Price Per Liter (USD)": 1.27,
    "Price Per Liter (PKR)": 268.18
  },
  {
    "id": 154,
    "Country": "Liberia",
    "Daily Oil Consumption (Barrels)": 8000,
    "World Share": "0.01%",
    "Yearly Gallons Per Capita": 26.7,
    "Price Per Gallon (USD)": 4.9,
    "Price Per Liter (USD)": 1.3,
    "Price Per Liter (PKR)": 273.89
  },
  {
    "id": 155,
    "Country": "Aruba",
    "Daily Oil Consumption (Barrels)": 8000,
    "World Share": "0.01%",
    "Yearly Gallons Per Capita": 1169.4,
    "Price Per Gallon (USD)": 6.08,
    "Price Per Liter (USD)": 1.61,
    "Price Per Liter (PKR)": 339.67
  },
  {
    "id": 156,
    "Country": "Seychelles",
    "Daily Oil Consumption (Barrels)": 7299,
    "World Share": "0.01%",
    "Yearly Gallons Per Capita": 1169.1,
    "Price Per Gallon (USD)": 6.9,
    "Price Per Liter (USD)": 1.82,
    "Price Per Liter (PKR)": 385.35
  },
  {
    "id": 157,
    "Country": "Montenegro",
    "Daily Oil Consumption (Barrels)": 7000,
    "World Share": "0.01%",
    "Yearly Gallons Per Capita": 171.1,
    "Price Per Gallon (USD)": 6.46,
    "Price Per Liter (USD)": 1.71,
    "Price Per Liter (PKR)": 361.03
  },
  {
    "id": 158,
    "Country": "Rwanda",
    "Daily Oil Consumption (Barrels)": 6700,
    "World Share": "0.01%",
    "Yearly Gallons Per Capita": 8.8,
    "Price Per Gallon (USD)": 5.36,
    "Price Per Liter (USD)": 1.42,
    "Price Per Liter (PKR)": 299.27
  },
  {
    "id": 159,
    "Country": "Sierra Leone",
    "Daily Oil Consumption (Barrels)": 6500,
    "World Share": "0.01%",
    "Yearly Gallons Per Capita": 13.6,
    "Price Per Gallon (USD)": 5.17,
    "Price Per Liter (USD)": 1.37,
    "Price Per Liter (PKR)": 288.91
  },
  {
    "id": 160,
    "Country": "Malawi",
    "Daily Oil Consumption (Barrels)": 6001,
    "World Share": "0.01%",
    "Yearly Gallons Per Capita": 5.3,
    "Price Per Gallon (USD)": 5.12,
    "Price Per Liter (USD)": 1.35,
    "Price Per Liter (PKR)": 285.95
  },
  {
    "id": 161,
    "Country": "Armenia",
    "Daily Oil Consumption (Barrels)": 6000,
    "World Share": "0.01%",
    "Yearly Gallons Per Capita": 31.3,
    "Price Per Gallon (USD)": 4.77,
    "Price Per Liter (USD)": 1.26,
    "Price Per Liter (PKR)": 266.49
  },
  {
    "id": 162,
    "Country": "Somalia",
    "Daily Oil Consumption (Barrels)": 5600,
    "World Share": "0.01%",
    "Yearly Gallons Per Capita": 6.1,
    "Price Per Gallon (USD)": 3.03,
    "Price Per Liter (USD)": 0.8,
    "Price Per Liter (PKR)": 169.2
  },
  {
    "id": 163,
    "Country": "Cabo Verde",
    "Daily Oil Consumption (Barrels)": 5600,
    "World Share": "0.01%",
    "Yearly Gallons Per Capita": 161.6,
    "Price Per Gallon (USD)": 6.86,
    "Price Per Liter (USD)": 1.81,
    "Price Per Liter (PKR)": 383.24
  },
  {
    "id": 164,
    "Country": "Lesotho",
    "Daily Oil Consumption (Barrels)": 5001,
    "World Share": "0.01%",
    "Yearly Gallons Per Capita": 36.9,
    "Price Per Gallon (USD)": 5.68,
    "Price Per Liter (USD)": 1.5,
    "Price Per Liter (PKR)": 317.46
  },
  {
    "id": 165,
    "Country": "Cayman Islands",
    "Daily Oil Consumption (Barrels)": 4401,
    "World Share": "0.00%",
    "Yearly Gallons Per Capita": 1078.3,
    "Price Per Gallon (USD)": 6.27,
    "Price Per Liter (USD)": 1.66,
    "Price Per Liter (PKR)": 350.24
  },
  {
    "id": 166,
    "Country": "Belize",
    "Daily Oil Consumption (Barrels)": 4001,
    "World Share": "0.00%",
    "Yearly Gallons Per Capita": 166.5,
    "Price Per Gallon (USD)": 6.68,
    "Price Per Liter (USD)": 1.76,
    "Price Per Liter (PKR)": 373.09
  },
  {
    "id": 167,
    "Country": "Gambia",
    "Daily Oil Consumption (Barrels)": 3800,
    "World Share": "0.00%",
    "Yearly Gallons Per Capita": 27.1,
    "Price Per Gallon (USD)": 5.04,
    "Price Per Liter (USD)": 1.33,
    "Price Per Liter (PKR)": 281.51
  },
  {
    "id": 168,
    "Country": "Bhutan",
    "Daily Oil Consumption (Barrels)": 3001,
    "World Share": "0.00%",
    "Yearly Gallons Per Capita": 62.4,
    "Price Per Gallon (USD)": 4.46,
    "Price Per Liter (USD)": 1.18,
    "Price Per Liter (PKR)": 249.15
  },
  {
    "id": 169,
    "Country": "Central African Republic",
    "Daily Oil Consumption (Barrels)": 2800,
    "World Share": "0.00%",
    "Yearly Gallons Per Capita": 9.5,
    "Price Per Gallon (USD)": 9.06,
    "Price Per Liter (USD)": 2.39,
    "Price Per Liter (PKR)": 506.12
  },
  {
    "id": 170,
    "Country": "Grenada",
    "Daily Oil Consumption (Barrels)": 2000,
    "World Share": "0.00%",
    "Yearly Gallons Per Capita": 278.1,
    "Price Per Gallon (USD)": 4.62,
    "Price Per Liter (USD)": 1.22,
    "Price Per Liter (PKR)": 258.24
  },
  {
    "id": 171,
    "Country": "Burundi",
    "Daily Oil Consumption (Barrels)": 1499,
    "World Share": "0.00%",
    "Yearly Gallons Per Capita": 2.2,
    "Price Per Gallon (USD)": 5.09,
    "Price Per Liter (USD)": 1.34,
    "Price Per Liter (PKR)": 284.26
  },
  {
    "id": 172,
    "Country": "Comoros",
    "Daily Oil Consumption (Barrels)": 1300,
    "World Share": "0.00%",
    "Yearly Gallons Per Capita": 25,
    "Price Per Gallon (USD)": 5.15,
    "Price Per Liter (USD)": 1.36,
    "Price Per Liter (PKR)": 287.64
  },
  {
    "id": 173,
    "Country": "Dominica",
    "Daily Oil Consumption (Barrels)": 1301,
    "World Share": "0.00%",
    "Yearly Gallons Per Capita": 279.7,
    "Price Per Gallon (USD)": 4.78,
    "Price Per Liter (USD)": 1.26,
    "Price Per Liter (PKR)": 267.34
  },
  {
    "id": 174,
    "Country": "British Virgin Islands",
    "Daily Oil Consumption (Barrels)": 1240,
    "World Share": "0.00%",
    "Yearly Gallons Per Capita": 647.6,
    "Price Per Gallon (USD)": 3.6,
    "Price Per Liter (USD)": 0.95,
    "Price Per Liter (PKR)": 200.93
  },
  {
    "id": 175,
    "Country": "Vanuatu",
    "Daily Oil Consumption (Barrels)": 1100,
    "World Share": "0.00%",
    "Yearly Gallons Per Capita": 60.6,
    "Price Per Gallon (USD)": 4.92,
    "Price Per Liter (USD)": 1.3,
    "Price Per Liter (PKR)": 274.95
  },
  {
    "id": 176,
    "Country": "Tonga",
    "Daily Oil Consumption (Barrels)": 899,
    "World Share": "0.00%",
    "Yearly Gallons Per Capita": 136.3,
    "Price Per Gallon (USD)": 16.2,
    "Price Per Liter (USD)": 4.28,
    "Price Per Liter (PKR)": 905.22
  },
  {
    "id": 177,
    "Country": "Saint Pierre & Miquelon",
    "Daily Oil Consumption (Barrels)": 660,
    "World Share": "0.00%",
    "Yearly Gallons Per Capita": 1705.1,
    "Price Per Gallon (USD)": 8.27,
    "Price Per Liter (USD)": 2.19,
    "Price Per Liter (PKR)": 462.13
  },
  {
    "id": 178,
    "Country": "Kiribati",
    "Daily Oil Consumption (Barrels)": 400,
    "World Share": "0.00%",
    "Yearly Gallons Per Capita": 54.5,
    "Price Per Gallon (USD)": 4.09,
    "Price Per Liter (USD)": 1.08,
    "Price Per Liter (PKR)": 228.42
  },
  {
    "id": 179,
    "Country": "Montserrat",
    "Daily Oil Consumption (Barrels)": 400,
    "World Share": "0.00%",
    "Yearly Gallons Per Capita": 1231.1,
    "Price Per Gallon (USD)": 4.57,
    "Price Per Liter (USD)": 1.21,
    "Price Per Liter (PKR)": 255.07
  },
  {
    "id": 180,
    "Country": "Saint Helena",
    "Daily Oil Consumption (Barrels)": 70,
    "World Share": "0.00%",
    "Yearly Gallons Per Capita": 180.2,
    "Price Per Gallon (USD)": 5.53,
    "Price Per Liter (USD)": 1.46,
    "Price Per Liter (PKR)": 309.21
  },
  {
    "id": 181,
    "Country": "Niue",
    "Daily Oil Consumption (Barrels)": 51,
    "World Share": "0.00%",
    "Yearly Gallons Per Capita": 484.4,
    "Price Per Gallon (USD)": 11.43,
    "Price Per Liter (USD)": 3.02,
    "Price Per Liter (PKR)": 638.73
  }
]
export function getPetrolPricess(){
  return petrolPrices;
}





let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.1117, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":3.5055, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":3.1879, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4294, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.9065, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2565, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.513, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0538, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0011, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0145, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":2.3196, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0296, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0183, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0059, "optimal":"yes"} ]}; 

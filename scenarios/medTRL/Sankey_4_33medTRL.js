let dataV={"nodes": [
{"name":"Landfill"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"PLA", "target":"Households", "value":4.155, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.2343, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.9207, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.0371, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1798, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.3596, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":1.6776, "optimal":"yes"} ]}; 

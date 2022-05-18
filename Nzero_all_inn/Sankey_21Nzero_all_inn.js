let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"LABS from chemical recycling of PE"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0054, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6295, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0004, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0848, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0269, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5416, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0506, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0003, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0957, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.232, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0061, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1601, "optimal":"yes"} ]}; 

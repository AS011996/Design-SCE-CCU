let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"LABS from chemical recycling of PE"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.3244, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3903, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.2958, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0261, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0522, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.1266, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0033, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0873, "optimal":"yes"} ]}; 

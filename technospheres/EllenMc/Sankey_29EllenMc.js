let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0005, "optimal":"yes"} , 
{"source":"Incineration", "target":"Landfill", "value":0.0631, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.006999999999999999, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":2.0380000000000003, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.1725, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.9481, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2624, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0025, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":0.8391, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.6294, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.2487, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1567, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.6294, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.1888, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.016, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.068, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.1038, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.017, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0054, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0088, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0018, "optimal":"yes"} ]}; 

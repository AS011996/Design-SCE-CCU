let dataV={"nodes": [
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
 {"source":"HDPE", "target":"Households", "value":1.1626, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.4054, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.3818, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1861, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.2599, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1112, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.2224, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.7693, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2683, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.2769, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.4231, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0692, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0912, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1475, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0295, "optimal":"yes"} ]}; 

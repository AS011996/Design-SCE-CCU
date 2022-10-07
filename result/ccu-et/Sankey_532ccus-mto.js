let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.372, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3427, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.3392, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0299, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0599, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2793, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1536, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.095, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0307, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ]}; 

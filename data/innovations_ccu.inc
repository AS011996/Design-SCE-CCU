*E139 is co2 captured
*E140 is methanol
*E141 is dummy

*electrolytic co2 to ethylene
A('E139','P158')=-12.52; *carbon dioxide feedstock
A('E64','P158')=1; *
A('E17','P158')=-31.98*3.6;

*Methanol to Olefins
A('E140','P159')=-2.67; *methanol input
A('E64','P159')=-0.4737; *
A('E76','P159')=-0.5263;

*two step electrochemical CO2 to methanol
A('E139','P160')=-0.87; *using dummy CO2
A('E140','P160')=1; *methanol output

*carbon capture from electricity generation
A('E17','P161')=-0.8112*3.6; *electricity requirement in MJ
*B('I7','P161')=-1; 
A('E139','P161')=1; *Making dummy CO2 available
A('E141','P161')=-1; *dummy connector to tie 

*modifying coal elec generation
*moving coal co2 from intervention to technology
B('I146','P68')=0; *removing carbon dioxide emission of coal power gen
A('E141','P68')=0.99407; *moving co2 emission from B into dummy tying flow 

*creating a dummny process to emit the technology co2 which is actually uncaptured
A('E141','P162')=-1; *take unused co2 that was captured
B('I146','P162')=1; *move unused captured co2 back to env



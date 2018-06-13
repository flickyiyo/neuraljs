contador = {
  'web': 0,
  'ebay': 0
}

cadena = raw_input()

webPila = 'web'
webFlag = True
ebayPila = 'ebay'
ebayFlag = True

for caracter in cadena:
  if(caracter==webPila[0] and webFlag):
    webPila = webPila[1::]
    webFlag = False
  if caracter == webPila[0] and webFlag == False:
    webPila = webPila[1::] 
  else
    webFlag = True
    webPila = 'web'
  
  if(caracter==ebayPila[0] and ebayFlag):
    ebayPila = ebayPila[1::]
    ebayFlag = False
  elif caracter == ebayPila[0]:
    ebayPila = ebayPila[1::] 
  else
    ebayFlag = True
    ebayPila = 'web'

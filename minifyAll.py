# tool called easy_install already added to path so can use directly like so
#easy_install requests

import requests
from html.parser import HTMLParser
import re
import time
import os
import io

currentDate=time.strftime("%Y%m%d")

directory="minified_" + currentDate
if not os.path.exists(directory):
    os.makedirs(directory)

url = 'https://cssminifier.com/raw'
data = {'input': open('fletcheralex.css', 'rb').read()}
cssResponse = requests.post(url, data=data)

minCssPath = directory + '\\' + 'fletcheralex.min.css'
minCss = io.open(minCssPath, 'w', encoding='utf8')
minCss.write(cssResponse.text)
minCss.close()
# print (response.text)

url = 'https://javascript-minifier.com/raw'
data = {'input': open('fletcheralex.js', 'rb').read()}
jsResponse = requests.post(url, data=data)

minJsPath = directory + '\\' + 'fletcheralex.min.js'
minJs = io.open(minJsPath, 'w', encoding='utf8')
minJs.write(jsResponse.text)
minJs.close()


# look for the following tags
# <link rel="stylesheet" href="fletcheralex.css">
# <script type="text/javascript" src="fletcheralex.js"></script>

htmlOutPath = directory + '\\' + 'fletcheralex.html'
htmlOut = io.open(htmlOutPath, 'w', encoding='utf8')

with io.open('fletcheralex.html', 'r', encoding='utf8') as htmlfile:
    for line in htmlfile:
      cssMatch = re.search(r'fletcheralex.css', line)
      jsMatch = re.search(r'fletcheralex.js', line)

      if cssMatch:
        htmlOut.write("<style type='text/css'>\n")
        # htmlOut.write(minCss)
        htmlOut.write(cssResponse.text)
        htmlOut.write("\n</style>\n")
      elif jsMatch:        
          htmlOut.write("<script type='text/javascript'>\n")
          # htmlOut.write(minJs)
          htmlOut.write(jsResponse.text)
          htmlOut.write("\n</script>\n")
      else:
        htmlOut.write(line)

htmlOut.close()
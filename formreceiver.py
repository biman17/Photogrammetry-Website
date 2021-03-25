# import cgi module:
import cgi
#import datetime module:
from datetime import datetime
 
# output http header:
print ('Content-type: text/html')
print ('')
# note the empty print above is required!
 
print ('<html><head><title>Python Test</title></head>')
print ('<body>')
 
theRequest = cgi.FieldStorage()
# get the name & sport fields
fname = theRequest.getfirst("firstname", "undefined")
lname = theRequest.getfirst("lastname", "undefined")
# get the current dat & time:
currentDateTime = datetime.today()
# from that, get the current year:
currentYear = currentDateTime.year
# now get the year field, with the current year as default,
# and cast it to an integer (fields are string by default)
review = theRequest.getfirst("subject", "undefined")
 
# report the results:
print('Your First Name is %s <br>' % fname)
print('Your Last Name is %s <br>' % lname)
print('Your have played this sport for %s years' % review)
 
print ('</body></html>')
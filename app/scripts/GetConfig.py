#coding=utf-8

import xml.dom.minidom
import sys

class pm_sql_param:
	def __init__(self):
		self.startdate=""
		self.stopdate=""
		self.starttime=""
		self.stoptime=""
		self.selectperiod=15
		self.selectperiodtype='continue'
		self.selectmmesgsn="all"
		self.selectmmeelement="MMESGSN"
		self.selectsaegwelement="SAEGWGGSN"
		self.selectggsn="all"
		self.selectsession="0"
		self.localsave="0"

def getdbconfig(dbname):
	try:
		dom = xml.dom.minidom.parse(".\\config\\db.xml")
	
		dbs=dom.getElementsByTagName('dbname')
		#print dbs
		for db in dbs:
			#print db.getAttribute('id')
			if db.getAttribute('id')==dbname:
				user = db.getElementsByTagName('userid')[0].firstChild.data
				passwd = db.getElementsByTagName('password')[0].firstChild.data
				url = db.getElementsByTagName('dburl')[0].firstChild.data
				break
		return (user,passwd,url)
	except:
		return ('except','','')

if __name__ == "__main__":
	print sys.argv[1]
	(username,passwd,url)=getdbconfig(sys.argv[1])
	print username
	print passwd
	print url
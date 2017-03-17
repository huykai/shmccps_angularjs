
#coding=utf-8


import sys,getopt
import cgi
import cx_Oracle
import time
import datetime
import string

datafile=None
strlines=None

def opensgsnfile(iname,idate,itime):
	keypara=iname
	if(iname=='SGSN97BNK'):
		keypara='SGSN97'
	keydate=idate.replace('/','')
	keytime=itime[0:2]
	keydate=keydate+keytime
	
	global datafile
	datafile=open("C:\\tmp\\sgsn"+keypara+"_checkresult.txt","r")
	#datafile.close()
	#print datafile.encoding
	global strlines
	strlines=datafile.readlines()
	#print strlines.encoding
	
def printsgsn(iname,idate,itime):

	
	keypara=iname
	if(iname=='SGSN97BNK'):
		keypara='SGSN97'
	keydate=idate.replace('/','')
	
	if(len(itime)<4):
		keytime=itime[0:2]+'00'
	else:
		keytime=itime[0:5]
		keytime=keytime.replace(':','')
	keydate=keydate+keytime
	#global datafile
	#datafile.close()
	findstrline=0
	global strlines
	#strlines=opensgsnfile(iname,idate,itime)
	
	#reload(sys)
	#sys.setdefaultencoding('gb2312')
	
	#printsgsntmp(iname,idate,itime)
	#return
	
	searchstr=keypara+' '+keydate
	#print 'len(searchstr)='+str(len(searchstr))
	#print 'searchstr='+searchstr
	longlenofstr=len(searchstr)
	shortlenofstr=8
	#print 'lenofstr='+str(lenofstr)
	try:
		for strline in strlines:
			#if(strline[0:2]=='\n'):
			#	strline.replace('\n','')
			#strline.decode('utf-8')
			#print strline[0:17]
			#print strline[0:lenofstr]
			if (findstrline==1):
				findstrline=2
				continue
			if(findstrline==0):
				if(strline[0:longlenofstr]==searchstr):
					#print '  1strline[0:10]='+strline[0:longlenofstr]
					findstrline=1
					continue
				else:
					if(strline[0:longlenofstr]>searchstr):
						#print '  2strline[0:10]='+strline[0:longlenofstr]
						findstrline=1
						continue
					else:
						continue
			
			
			if(findstrline==2):
				#print 'findstrline=2'
				#print strline
				findstrline=0
				strpara=strline.split('\t')
				#print strpara[0]
				#print strpara[1]
				#print strpara[2]
				#print strpara[3]
				strpara[4]=string.atoi(strpara[4])
				strpara[5]=string.atoi(strpara[5].rstrip('\n'))

				if (len(strpara)<6):
					print "<ItemCol>"
					print "<value>"
					print "1111"
					print "</value>"
					print "</ItemCol>"
					print "<ItemCol>"
					print "<value>"
					print "2222"
					print "</value>"
					print "</ItemCol>"
					print "<ItemCol>"
					print "<value>"
					print "3333"
					print "</value>"
					print "</ItemCol>"
					print "<ItemCol>"
					print "<value>"
					print "4444"
					print "</value>"
					print "</ItemCol>"
					print "<ItemCol>"
					print "<value>"
					print "5555"
					print "</value>"
					print "</ItemCol>"
					print "<ItemCol>"
					print "<value>"
					print "6666"
					print "</value>"
					print "</ItemCol>"
				else:
					#print "<ItemCol>"
					#print "<value>"
					#print "null"
					#print "</value>"
					#print "</ItemCol>"
					#print "<ItemCol>"
					#print "<value>"
					#print "null"
					#print "</value>"
					#print "</ItemCol>"
					#print "<ItemCol>"
					#print "<value>"
					#print "null"
					#print "</value>"
					#print "</ItemCol>"
					#print "<ItemCol>"
					#print "<value>"
					#print "null"
					#print "</value>"
					#print "</ItemCol>"
					
					#strpara[3]=strpara[3].rstrip('\n')
					#for y1 in strpara:
					#	print "<ItemCol>"
					#	print "<value>"
					#	print y1.encode('GB2312')
					#	print "</value>"
					#	print "</ItemCol>"
					
					#y1="".join(list(strpara[0]))
					#y2="".join(list(strpara[1]))
					#y3="".join(list(strpara[2]))
					#y4="".join(list(strpara[3].rstrip('\n')))
					print "<ItemCol>"
					print "<value>"
					print strpara[0]
					#print "1111"
					print "</value>"
					print "</ItemCol>"
					print "<ItemCol>"
					print "<value>"
					print strpara[1]
					#print "2222"
					print "</value>"
					print "</ItemCol>"
					print "<ItemCol>"
					print "<value>"
					print strpara[2]
					#print "3333"
					print "</value>"
					print "</ItemCol>"
					print "<ItemCol>"
					print "<value>"
					print strpara[3]
					#print "4444"
					print "</value>"
					print "</ItemCol>"
					print "<ItemCol>"
					print "<value>"
					print strpara[4]
					print "</value>"
					print "</ItemCol>"
					print "<ItemCol>"
					print "<value>"
					print strpara[5]
					print "</value>"
					print "</ItemCol>"
				break
			else:
				continue
		#datafile.close()
	except Exception, e:
		print e
		print "<ItemCol>"
		print "<value>"
		print "null"
		print "</value>"
		print "</ItemCol>"
		print "<ItemCol>"
		print "<value>"
		print "null"
		print "</value>"
		print "</ItemCol>"
		print "<ItemCol>"
		print "<value>"
		print "null"
		print "</value>"
		print "</ItemCol>"
		print "<ItemCol>"
		print "<value>"
		print "null"
		print "</value>"
		print "</ItemCol>"
		print "<ItemCol>"
		print "<value>"
		print "null"
		print "</value>"
		print "</ItemCol>"	
		print "<ItemCol>"
		print "<value>"
		print "null"
		print "</value>"
		print "</ItemCol>"
	
def localsavesgsn(iname,idate,itime):

	
	keypara=iname
	if(iname=='SGSN97BNK'):
		keypara='SGSN97'
	keydate=idate.replace('/','')
	
	if(len(itime)<4):
		keytime=itime[0:2]+'00'
	else:
		keytime=itime[0:5]
		keytime=keytime.replace(':','')
	keydate=keydate+keytime
	findstrline=0
	global strlines
	
	
	searchstr=keypara+' '+keydate
	longlenofstr=len(searchstr)
	shortlenofstr=8
	try:
		for strline in strlines:
			if (findstrline==1):
				findstrline=2
				continue
			if(findstrline==0):
				if(strline[0:longlenofstr]==searchstr):
					findstrline=1
					continue
				else:
					if(strline[0:longlenofstr]>searchstr):
						findstrline=1
						continue
					else:
						continue
			
			
			if(findstrline==2):
				findstrline=0
				strpara=strline.split('\t')
				strpara[4]=string.atoi(strpara[4])
				strpara[5]=string.atoi(strpara[5].rstrip('\n'))

				if (len(strpara)<6):
					reportfile.write("1111")
					reportfile.write("2222")
					reportfile.write("3333")
					reportfile.write("4444")
					reportfile.write("5555")
					reportfile.write("6666")
				else:
					reportfile.write(strpara[0])
					reportfile.write(",")
					reportfile.write(strpara[1])
					reportfile.write(",")
					reportfile.write(strpara[2])
					reportfile.write(",")
					reportfile.write(strpara[3])
					reportfile.write(",")
					reportfile.write(str(strpara[4]))
					reportfile.write(",")
					reportfile.write(str(strpara[5]))
					reportfile.write(",")
				break
			else:
				continue
		#datafile.close()
	except Exception, e:
		 print e
		 
def printall(keystrr,rowr):
	rownor=0
	isthisrow='false'
	for xr in rowr:
		keystring=''
		rownor=rownor+1
		ir=0
		keystring=''
		for yr in xr:
			ir=ir+1
			if(ir<=4):
				keystring=keystring+str(yr)
			if(ir==4):
				if(keystring==keystrr):
					isthisrow='true'
		if(isthisrow=='true'):
			if(localsave==0):
				print "<ItemCol>"
				print "<value>"
				print yr
				print "</value>"
				print "</ItemCol>"
				break
			elif(localsave==1):
				reportfile.write(str(yr))
				reportfile.write(",")
				break


# Create instance of FieldStorage 
form = cgi.FieldStorage() 

curdate=time.strftime('%Y/%m/%d',time.localtime(time.time()))
curtime=time.strftime('%H',time.localtime(time.time()))
# Get data from fields
location = form.getvalue('location')
if (location == None):
	location=1

selectmmesgsn=form.getvalue('selectmmesgsnname')
if(selectmmesgsn==None):
	selectmmesgsn='all'
startdate = form.getvalue('selectstartdate')
if (startdate == None):
	startdate=curdate
stopdate = form.getvalue('selectstopdate')
if (stopdate == None):
	stopdate=curdate
starttime = form.getvalue('selectstarttime')
if (starttime == None):
	starttime='10'
stoptime = form.getvalue('selectstoptime')
if (stoptime == None):
#	stoptime=curtime
	stoptime='10'
selectperiod = form.getvalue('selectperiod')
if (selectperiod == None):
	selectperiod='15'
		
selectelement = form.getvalue('selectelement')
if (selectelement == None):
	selectelement='MMESGSN'
#last_name  = form.getvalue('last_name')

#getops
localsave='0'
opts, args = getopt.getopt(sys.argv[1:], "e:D:T:d:t:p:l:") 
#print sys.argv[1:]
lenofargs=len(opts)
#print lenofargs
if (lenofargs ==7):
	#localsave=1
	for op, value in opts: 
		if op == "-e": 
			selectmmesgsn=value 
		elif op == "-D": 
			startdate = value 
		elif op == "-T": 
			starttime=value[0:2]
			starttimemm=value[2:] 
			starttimeall=value
		elif op == "-d": 
			stopdate = value 
		elif op == "-t": 
			stoptime=value[0:2]
			stoptimemm=value[2:]
			stoptimeall=value
		elif op == "-p": 
			selectperiod=value
		elif op == "-l": 
			localsave=value
	
	if(localsave=='1'):
		fnstartdate=startdate.replace("/","")
		fnstopdate=stopdate.replace("/","")
		#print starttime
		#print stoptime
		#print startdate
		#print stopdate
		
		if(int(starttimemm)<10):
			#print starttimemm + "<10"
			if (int(starttime)>0):
				starttime=str(int(starttime)-1)
			else:
				date1=datetime.datetime.strptime(startdate,"%Y/%m/%d")
				date1=date1+datetime.timedelta(days=-1)
				startdate=date1.strftime("%Y/%m/%d")
				starttime=str(23)
		if(int(stoptimemm)<10):
			#print stoptimemm + "<10"
			if (int(stoptime)>0):
				stoptime=str(int(stoptime)-1)
			else:
				date1=datetime.datetime.strptime(stopdate,"%Y/%m/%d")
				date1=date1+datetime.timedelta(days=-1)
				stopdate=date1.strftime("%Y/%m/%d")
				stoptime=str(23)
		#print startdate
		#print stopdate
		#print starttime
		#print stoptime
		#print starttimemm
		#print stoptimemm
		#print starttimeall
		#print stoptimeall
		reportfilename="c:/hyk/REPORTS/MMESta"+fnstartdate+starttimeall+"_"+fnstopdate+stoptimeall+"_"+selectperiod+".csv"
		reportfile=open(reportfilename,'w')
		print "Report File Name: "+reportfilename
		
#	print selectmmesgsn
#	print startdate
#	print starttime
#	print stopdate
#	print stoptime
#	print selectperiod
elif (lenofargs>0):
	print "Usage:	"+sys.argv[0]+" -D2015/04/03 -T04 -d2015/04/03 -t05 -eSHMME03BNK -p60 -l0"
	print "-D (Start Date :2015/04/02)"
	print "-T (Start Time :05)"
	print "-d (Stop Date  :2015/04/02)"
	print "-t (Stop Time  :06)"
	print "-e (Element or ALL)"
	print "-p (Period 15/60)"
	print "-l (Localsave 0/1)"
	sys.exit()
	
if (localsave=='1'):
	localsave=1
else:
	localsave=0
#print curtime
db = cx_Oracle.connect('kiu', 'antkiu123', '10.221.213.28:1521/OSS')
cursor=db.cursor()

#sum(SUCC_GPRS_ATTACH) attachsucccount, 
#sum(FAIL_GPRS_ATTACH_GEN) attachfailcount, 
#sum(FAIL_GPRS_ATTACH_SIM_NOT_PROV)+sum(FAIL_GPRS_ATTACH_ILLEGAL_MS)+sum(FAIL_GPRS_ATTACH_ILLEGAL_ME)+sum(FAIL_GPRS_ATTACH_SER_NONSER_NA) userfailcount, 
#decode(nvl((sum(SUCC_GPRS_ATTACH)+sum(FAIL_GPRS_ATTACH_GEN)),0),0,0,(round((sum(SUCC_GPRS_ATTACH)/(sum(SUCC_GPRS_ATTACH)+sum(FAIL_GPRS_ATTACH_GEN))),4)*100)) attachratio,
#decode(nvl((sum(SUCC_GPRS_ATTACH)+sum(FAIL_GPRS_ATTACH_GEN)-sum(FAIL_GPRS_ATTACH_SIM_NOT_PROV)-sum(FAIL_GPRS_ATTACH_ILLEGAL_MS)-sum(FAIL_GPRS_ATTACH_ILLEGAL_ME)-sum(FAIL_GPRS_ATTACH_SER_NONSER_NA)),0),0,0,(round((sum(SUCC_GPRS_ATTACH)/(sum(SUCC_GPRS_ATTACH)+sum(FAIL_GPRS_ATTACH_GEN)-sum(FAIL_GPRS_ATTACH_SIM_NOT_PROV)-sum(FAIL_GPRS_ATTACH_ILLEGAL_MS)-sum(FAIL_GPRS_ATTACH_ILLEGAL_ME)-sum(FAIL_GPRS_ATTACH_SER_NONSER_NA))),4)*100)) nonusersuccratio


if (selectperiod=='60'):
	sqlstring="""
select  
twog.fins_id,
objects.CO_NAME MMESGSN, 
to_char(twog.period_start_time,'yyyy/mm/dd') Sdate,
to_char(twog.period_start_time,'hh24') Stime, 
sum(SUCC_GPRS_ATTACH+SUCC_COMBINED_ATTACH) attachsucccount, 
sum(FAIL_GPRS_ATTACH_GEN+FAIL_COMB_ATTACH_GEN-FAIL_GPRS_ATTACH_DUE_MS_ERR-FAIL_GPRS_ATTACH_COLLISIONS) attachfailcount, 
sum(FAIL_GPRS_ATTACH_SIM_NOT_PROV+FAIL_GPRS_ATTACH_ILLEGAL_MS+FAIL_GPRS_ATTACH_ILLEGAL_ME+FAIL_GPRS_ATTACH_SER_NONSER_NA) userfailcount, 
decode(nvl((sum(SUCC_GPRS_ATTACH+FAIL_GPRS_ATTACH_GEN+SUCC_COMBINED_ATTACH+FAIL_COMB_ATTACH_GEN-FAIL_GPRS_ATTACH_DUE_MS_ERR-FAIL_GPRS_ATTACH_COLLISIONS)),0),0,0,(round((sum(SUCC_GPRS_ATTACH+SUCC_COMBINED_ATTACH)/(sum(SUCC_GPRS_ATTACH+FAIL_GPRS_ATTACH_GEN+SUCC_COMBINED_ATTACH+FAIL_COMB_ATTACH_GEN-FAIL_GPRS_ATTACH_DUE_MS_ERR-FAIL_GPRS_ATTACH_COLLISIONS))),4)*100)) attachratio,
decode(nvl((sum(SUCC_GPRS_ATTACH+FAIL_GPRS_ATTACH_GEN+SUCC_COMBINED_ATTACH+FAIL_COMB_ATTACH_GEN-FAIL_GPRS_ATTACH_DUE_MS_ERR-FAIL_GPRS_ATTACH_COLLISIONS-FAIL_GPRS_ATTACH_SIM_NOT_PROV-FAIL_GPRS_ATTACH_ILLEGAL_MS-FAIL_GPRS_ATTACH_ILLEGAL_ME-FAIL_GPRS_ATTACH_SER_NONSER_NA)),0),0,0,(round((sum(SUCC_GPRS_ATTACH+SUCC_COMBINED_ATTACH)/(sum(SUCC_GPRS_ATTACH+FAIL_GPRS_ATTACH_GEN+SUCC_COMBINED_ATTACH+FAIL_COMB_ATTACH_GEN-FAIL_GPRS_ATTACH_DUE_MS_ERR-FAIL_GPRS_ATTACH_COLLISIONS-FAIL_GPRS_ATTACH_SIM_NOT_PROV-FAIL_GPRS_ATTACH_ILLEGAL_MS-FAIL_GPRS_ATTACH_ILLEGAL_ME-FAIL_GPRS_ATTACH_SER_NONSER_NA))),4)*100)) nonusersuccratio
from 	PCOFNS_PS_GMMLR_CI3_RAW twog,  
			UTP_COMMON_OBJECTS objects 
where 
twog.FINS_ID=objects.CO_GID 
""" 

else:
	sqlstring="""
select  
twog.fins_id,
objects.CO_NAME MMESGSN, 
to_char(twog.period_start_time,'yyyy/mm/dd') Sdate,
to_char(twog.period_start_time,'hh24:mi') Stime, 
sum(SUCC_GPRS_ATTACH+SUCC_COMBINED_ATTACH) attachsucccount, 
sum(FAIL_GPRS_ATTACH_GEN+FAIL_COMB_ATTACH_GEN-FAIL_GPRS_ATTACH_DUE_MS_ERR-FAIL_GPRS_ATTACH_COLLISIONS) attachfailcount, 
sum(FAIL_GPRS_ATTACH_SIM_NOT_PROV+FAIL_GPRS_ATTACH_ILLEGAL_MS+FAIL_GPRS_ATTACH_ILLEGAL_ME+FAIL_GPRS_ATTACH_SER_NONSER_NA) userfailcount, 
decode(nvl((sum(SUCC_GPRS_ATTACH+FAIL_GPRS_ATTACH_GEN+SUCC_COMBINED_ATTACH+FAIL_COMB_ATTACH_GEN-FAIL_GPRS_ATTACH_DUE_MS_ERR-FAIL_GPRS_ATTACH_COLLISIONS)),0),0,0,(round((sum(SUCC_GPRS_ATTACH+SUCC_COMBINED_ATTACH)/(sum(SUCC_GPRS_ATTACH+FAIL_GPRS_ATTACH_GEN+SUCC_COMBINED_ATTACH+FAIL_COMB_ATTACH_GEN-FAIL_GPRS_ATTACH_DUE_MS_ERR-FAIL_GPRS_ATTACH_COLLISIONS))),4)*100)) attachratio,
decode(nvl((sum(SUCC_GPRS_ATTACH+FAIL_GPRS_ATTACH_GEN+SUCC_COMBINED_ATTACH+FAIL_COMB_ATTACH_GEN-FAIL_GPRS_ATTACH_DUE_MS_ERR-FAIL_GPRS_ATTACH_COLLISIONS-FAIL_GPRS_ATTACH_SIM_NOT_PROV-FAIL_GPRS_ATTACH_ILLEGAL_MS-FAIL_GPRS_ATTACH_ILLEGAL_ME-FAIL_GPRS_ATTACH_SER_NONSER_NA)),0),0,0,(round((sum(SUCC_GPRS_ATTACH+SUCC_COMBINED_ATTACH)/(sum(SUCC_GPRS_ATTACH+FAIL_GPRS_ATTACH_GEN+SUCC_COMBINED_ATTACH+FAIL_COMB_ATTACH_GEN-FAIL_GPRS_ATTACH_DUE_MS_ERR-FAIL_GPRS_ATTACH_COLLISIONS-FAIL_GPRS_ATTACH_SIM_NOT_PROV-FAIL_GPRS_ATTACH_ILLEGAL_MS-FAIL_GPRS_ATTACH_ILLEGAL_ME-FAIL_GPRS_ATTACH_SER_NONSER_NA))),4)*100)) nonusersuccratio
from 	PCOFNS_PS_GMMLR_CI3_RAW twog,  
			UTP_COMMON_OBJECTS objects 
where 
twog.FINS_ID=objects.CO_GID 
"""
 
if (selectmmesgsn<>'all'):
	sqlstring=sqlstring+" and objects.co_name= \'"+selectmmesgsn+"\' " 

sqlstringtime=" and to_char(twog.period_start_time,\'yyyy/mm/dd/hh24\')>=\'"+startdate+"/"+starttime+"\' and to_char(twog.period_start_time,\'yyyy/mm/dd/hh24\')<=\'"+stopdate+"/"+stoptime + "\' "

if (selectperiod=='60'):
	sqlstring1=""" 
	group by to_char(twog.period_start_time,'yyyy/mm/dd'), to_char(twog.period_start_time,'hh24'), twog.fins_id, objects.co_name 
	order by objects.co_name,to_char(twog.period_start_time,'yyyy/mm/dd'),to_char(twog.period_start_time,'hh24')
	"""
else:
	sqlstring1="""
	group by to_char(twog.period_start_time,'yyyy/mm/dd'),to_char(twog.period_start_time,'hh24:mi'), twog.fins_ID, objects.co_name 
	order by objects.CO_name,to_char(twog.period_start_time,'yyyy/mm/dd'),to_char(twog.period_start_time,'hh24:mi')
	"""
sqlstring=sqlstring+sqlstringtime+sqlstring1
#print sqlstring

cursor.execute(sqlstring)

row1=cursor.fetchall()

if (localsave==0):
	print 'Status: 200 OK'
	print 'Content-type: text/xml charset=GB2312;\n'


	print "<?xml version=\"1.0\" encoding=\"GB2312\"?>"
	print "<response>"
	print "<location>"
	print "<locationid>1</locationid>"
	print "<passed>true</passed>"
	print "<message>Attach 2G ͳ��</message>"
	print "<Title>"
	print "<name>�豸ID"+str(lenofargs)+"</name>"
	print "<name>�豸����</name>"
	print "<name>����</name>"
	print "<name>ʱ��</name>"
	print "<name>���ųɹ�����2G</name>"
	print "<name>����ʧ�ܴ���2G</name>"
	print "<name>�û�ԭ����ʧ�ܴ���2G</name>"
	print "<name>���ųɹ���2G</name>"
	print "<name>ȥ���û�ԭ���ųɹ���</name>"
	print "</Title>"
elif localsave==1:
	reportfile.write("Attach 2G ͳ��")
	reportfile.write("\n")
	reportfile.write("�豸ID,")
	reportfile.write("�豸����,")
	reportfile.write("����,")
	reportfile.write("ʱ��,")
	reportfile.write("���ųɹ�����2G,")
	reportfile.write("����ʧ�ܴ���2G,")
	reportfile.write("�û�ԭ����ʧ�ܴ���2G,")
	reportfile.write("���ųɹ���2G,")
	reportfile.write("ȥ���û�ԭ���ųɹ���")
	
	
for x in row1:
	if (localsave==0):
		print "<Item>"
	elif localsave==1:
		reportfile.write("\n")
	for y in x:
		#print y
		if (localsave==0):
			print "<ItemCol>"
			print "<value>"
			print y
			print "</value>"
			print "</ItemCol>"
		elif (localsave==1):
			reportfile.write(str(y))
			reportfile.write(",")
	if (localsave==0):
		print "</Item>"
	
	
if (localsave==0):
	print "</location>"
elif localsave==1:
	reportfile.write("\n")



# PDP activation 2G

if (localsave==0):
	print "<location>"
	print "<locationid>2</locationid>"
	print "<passed>true</passed>"
	print "<message>PDP Activation 2G</message>"
	print "<Title>"
	print "<name>�豸ID</name>"
	print "<name>�豸����</name>"
	print "<name>����</name>"
	print "<name>ʱ��</name>"
	print "<name>PDP�ɹ�����2G</name>"
	print "<name>PDP����2G</name>"
	print "<name>PDPʧ�ܴ���2G</name>"
	print "<name>PDP����ɹ���2G</name>"
	print "<name>PDPȥ���û�ԭ�򼤻�ɹ���2G</name>"
	print "</Title>"
elif localsave==1:
	reportfile.write("PDP Activation 2G")
	reportfile.write("\n")
	reportfile.write("�豸ID,")
	reportfile.write("�豸����,")
	reportfile.write("����,")
	reportfile.write("ʱ��,")
	reportfile.write("PDP�ɹ�����2G,")
	reportfile.write("PDP����2G,")
	reportfile.write("PDPʧ�ܴ���2G,")
	reportfile.write("PDP����ɹ���2G,")
	reportfile.write("PDPȥ���û�ԭ�򼤻�ɹ���2G")

if (selectperiod=='60'):
	sqlstring="""
select
twog.fins_id,
objects.co_name MMESGSN,
to_char(twog.period_start_time,'yyyy/mm/dd') Sdate,
to_char(twog.period_start_time,'hh24') Stime,
sum(SUCC_MO_PDP_CONTEXT_ACT) PdpSucc2g,
sum(SUCC_MO_PDP_CONTEXT_ACT+FAIL_MO_PDP_CONT_ACT_GEN) PdpAtt2g,
sum(FAIL_MO_PDP_ACT_MIS_UNK_APN+FAIL_MO_PDP_ACT_UNK_ADDR_TYPE+FAIL_MO_PDP_ACT_WRONG_PASSWORD+FAIL_MO_PDP_ACT_SERV_OPT_NS+FAIL_MO_PDP_ACT_REQ_SE_OP_NS) PdpFailUser2g,
decode(nvl((sum(SUCC_MO_PDP_CONTEXT_ACT+FAIL_MO_PDP_CONT_ACT_GEN)),0),0,0,(round((sum(SUCC_MO_PDP_CONTEXT_ACT)/(sum(SUCC_MO_PDP_CONTEXT_ACT+FAIL_MO_PDP_CONT_ACT_GEN))),4)*100)) PdpSR2g,
decode(nvl((sum(SUCC_MO_PDP_CONTEXT_ACT+FAIL_MO_PDP_CONT_ACT_GEN)),0),0,0,(round((sum(SUCC_MO_PDP_CONTEXT_ACT)/(sum(SUCC_MO_PDP_CONTEXT_ACT+FAIL_MO_PDP_CONT_ACT_GEN-(FAIL_MO_PDP_ACT_MIS_UNK_APN+FAIL_MO_PDP_ACT_UNK_ADDR_TYPE+FAIL_MO_PDP_ACT_WRONG_PASSWORD+FAIL_MO_PDP_ACT_SERV_OPT_NS+FAIL_MO_PDP_ACT_REQ_SE_OP_NS)))),4)*100)) PdpSR2g
from 	PCOFNS_PS_SMTM2_CI3_RAW twog, 
			UTP_COMMON_OBJECTS objects
where 
twog.fins_id=objects.co_gid 
"""
else:
	sqlstring="""
select
twog.fins_id,
objects.co_name MMESGSN,
to_char(twog.period_start_time,'yyyy/mm/dd') Sdate,
to_char(twog.period_start_time,'hh24:mi') Stime,
sum(SUCC_MO_PDP_CONTEXT_ACT) PdpSucc2g,
sum(SUCC_MO_PDP_CONTEXT_ACT+FAIL_MO_PDP_CONT_ACT_GEN) PdpAtt2g,
sum(FAIL_MO_PDP_ACT_MIS_UNK_APN+FAIL_MO_PDP_ACT_UNK_ADDR_TYPE+FAIL_MO_PDP_ACT_WRONG_PASSWORD+FAIL_MO_PDP_ACT_SERV_OPT_NS+FAIL_MO_PDP_ACT_REQ_SE_OP_NS) PdpFailUser2g,
decode(nvl((sum(SUCC_MO_PDP_CONTEXT_ACT+FAIL_MO_PDP_CONT_ACT_GEN)),0),0,0,(round((sum(SUCC_MO_PDP_CONTEXT_ACT)/(sum(SUCC_MO_PDP_CONTEXT_ACT+FAIL_MO_PDP_CONT_ACT_GEN))),4)*100)) PdpSR2g,
decode(nvl((sum(SUCC_MO_PDP_CONTEXT_ACT+FAIL_MO_PDP_CONT_ACT_GEN)),0),0,0,(round((sum(SUCC_MO_PDP_CONTEXT_ACT)/(sum(SUCC_MO_PDP_CONTEXT_ACT+FAIL_MO_PDP_CONT_ACT_GEN-(FAIL_MO_PDP_ACT_MIS_UNK_APN+FAIL_MO_PDP_ACT_UNK_ADDR_TYPE+FAIL_MO_PDP_ACT_WRONG_PASSWORD+FAIL_MO_PDP_ACT_SERV_OPT_NS+FAIL_MO_PDP_ACT_REQ_SE_OP_NS)))),4)*100)) PdpSR2g
from 	PCOFNS_PS_SMTM2_CI3_RAW twog, 
			UTP_COMMON_OBJECTS objects
where 
twog.fins_id=objects.co_gid 
"""

if (selectmmesgsn<>'all'):
	sqlstring=sqlstring+" and objects.co_name= \'"+selectmmesgsn+"\' " 

sqlstringtime=" and to_char(twog.period_start_time,\'yyyy/mm/dd/hh24\')>=\'"+startdate+"/"+starttime+"\' and to_char(twog.period_start_time,\'yyyy/mm/dd/hh24\')<=\'"+stopdate+"/"+stoptime + "\' "

if (selectperiod=='60'):
	sqlstring1=""" 
	group by to_char(twog.period_start_time,'yyyy/mm/dd'), to_char(twog.period_start_time,'hh24'), twog.fins_id, objects.co_name 
	order by objects.co_name,to_char(twog.period_start_time,'yyyy/mm/dd'),to_char(twog.period_start_time,'hh24')
	"""
else:
	sqlstring1="""
	group by to_char(twog.period_start_time,'yyyy/mm/dd'),to_char(twog.period_start_time,'hh24:mi'), twog.fins_ID, objects.co_name 
	order by objects.CO_name,to_char(twog.period_start_time,'yyyy/mm/dd'),to_char(twog.period_start_time,'hh24:mi')
	"""
sqlstring=sqlstring+sqlstringtime+sqlstring1
#print sqlstring

cursor.execute(sqlstring)

row2=cursor.fetchall()
for x in row2:
	if (localsave==0):
		print "<Item>"
	elif localsave==1:
		reportfile.write("\n")
	for y in x:
		if (localsave==0):
			print "<ItemCol>"
			print "<value>"
			print y
			print "</value>"
			print "</ItemCol>"
		elif localsave==1:
			reportfile.write(str(y))
			reportfile.write(',')
	if (localsave==0):
		print "</Item>"
	
	
if (localsave==0):
	print "</location>"
elif localsave==1:
	reportfile.write("\n")

# RAU 2G


if (localsave==0):
	print "<location>"
	print "<locationid>3</locationid>"
	print "<passed>true</passed>"
	print "<message>RAU ͳ�� 2G</message>"
	print "<Title>"
	print "<name>�豸ID</name>"
	print "<name>�豸����</name>"
	print "<name>����</name>"
	print "<name>ʱ��</name>"
	print "<name>RAU INTRA�ɹ�����2G</name>"
	print "<name>RAU INTRA���Դ���2G</name>"
	print "<name>RAU INTRAʧ�ܴ���2G</name>"
	print "<name>RAU INTRA�ɹ���2G</name>"
	print "<name>RAU INTER PAPU�ɹ�����2G</name>"
	print "<name>RAU INTER SGSN�ɹ�����2G</name>"
	print "<name>RAU INTER SGSN���Դ���2G</name>"
	print "<name>RAU INTER SGSNʧ�ܴ���2G</name>"
	print "<name>RAU INTER SGSN�ɹ���2G</name>"
	print "</Title>"
elif localsave==1:
	reportfile.write("RAU ͳ�� 2G")
	reportfile.write("\n")
	reportfile.write("�豸ID,")
	reportfile.write("�豸����,")
	reportfile.write("����,")
	reportfile.write("ʱ��,")
	reportfile.write("RAU INTRA�ɹ�����2G,")
	reportfile.write("RAU INTRA���Դ���2G,")
	reportfile.write("RAU INTRAʧ�ܴ���2G,")
	reportfile.write("RAU INTRA�ɹ���2G,")
	reportfile.write("RAU INTER PAPU�ɹ�����2G,")
	reportfile.write("RAU INTER SGSN�ɹ�����2G,")
	reportfile.write("RAU INTER SGSN���Դ���2G,")
	reportfile.write("RAU INTER SGSNʧ�ܴ���2G,")
	reportfile.write("RAU INTER SGSN�ɹ���2G")
	
if (selectperiod=='60'):
	sqlstring="""
select 
twog.FINS_ID,
objects.CO_Name MMESGSN,
to_char(twog.period_start_time,'yyyy/mm/dd') Sdate,
to_char(twog.period_start_time,'hh24') Stime,
(sum(SUCC_INTRA_PAPU_RA_UPDAT+SUCC_INTRA_PAPU_RA_LA_UPDAT+SUCC_INTER_PAPU_RA_UPDAT+SUCC_INTER_PAPU_RA_LA_UPDAT)) RauIntraSgsnSucc2g,
(sum(SUCC_INTRA_PAPU_RA_UPDAT+FAIL_INTRA_PAPU_RAU_GEN+SUCC_INTRA_PAPU_RA_LA_UPDAT+FAIL_INTRA_PAPU_RA_LA_UP_GEN+SUCC_INTER_PAPU_RA_UPDAT+FAIL_INTER_PAPU_RAU_GEN+SUCC_INTER_PAPU_RA_LA_UPDAT+FAIL_INTER_PAPU_RA_LA_UP_GEN)) RauIntraSgsnAtt2g,
(sum(FAIL_INTRA_PAPU_RAU_GEN+FAIL_INTRA_PAPU_RA_LA_UP_GEN+ FAIL_INTER_PAPU_RAU_GEN+ FAIL_INTER_PAPU_RA_LA_UP_GEN)) RauIntraSgsnFail2g,
decode(nvl((sum(SUCC_INTRA_PAPU_RA_UPDAT+FAIL_INTRA_PAPU_RAU_GEN+SUCC_INTRA_PAPU_RA_LA_UPDAT+FAIL_INTRA_PAPU_RA_LA_UP_GEN+SUCC_INTER_PAPU_RA_UPDAT+FAIL_INTER_PAPU_RAU_GEN+SUCC_INTER_PAPU_RA_LA_UPDAT+FAIL_INTER_PAPU_RA_LA_UP_GEN)),0),0,0,(round(((sum(SUCC_INTRA_PAPU_RA_UPDAT+SUCC_INTRA_PAPU_RA_LA_UPDAT+SUCC_INTER_PAPU_RA_UPDAT+SUCC_INTER_PAPU_RA_LA_UPDAT))/(sum(SUCC_INTRA_PAPU_RA_UPDAT+FAIL_INTRA_PAPU_RAU_GEN+SUCC_INTRA_PAPU_RA_LA_UPDAT+FAIL_INTRA_PAPU_RA_LA_UP_GEN+SUCC_INTER_PAPU_RA_UPDAT+FAIL_INTER_PAPU_RAU_GEN+SUCC_INTER_PAPU_RA_LA_UPDAT+FAIL_INTER_PAPU_RA_LA_UP_GEN))),4)*100)) RauIntraSgsnSR2g,
(sum(succ_periodical_ra_updat+succ_periodic_ra_la_updat+inter_papu_ra_la_up_s_in_ps+intra_papu_ra_la_up_s_in_ps+periodic_ra_la_up_s_in_ps)) RauPerSucc2g,
(sum(SUCC_INTER_SGSN_RA_UPDAT+SUCC_INTER_SGSN_RA_LA_UPDAT+INTER_SGSN_RA_LA_UP_S_IN_PS)) RauInterSgsnSucc2g,
(sum(SUCC_INTER_SGSN_RA_UPDAT+FAIL_INTER_SGSN_RAU_GEN+SUCC_INTER_SGSN_RA_LA_UPDAT+FAIL_INTER_SGSN_RA_LA_UP_GEN+INTER_SGSN_RA_LA_UP_S_IN_PS)) RauInterSgsnAtt2g,
(sum(FAIL_INTER_SGSN_RAU_GEN+FAIL_INTER_SGSN_RA_LA_UP_GEN)) RauInterSgsnFail2g,
decode(nvl((sum(SUCC_INTER_SGSN_RA_UPDAT+FAIL_INTER_SGSN_RAU_GEN+SUCC_INTER_SGSN_RA_LA_UPDAT+FAIL_INTER_SGSN_RA_LA_UP_GEN+INTER_SGSN_RA_LA_UP_S_IN_PS)),0),0,0,(round(((sum(SUCC_INTER_SGSN_RA_UPDAT+SUCC_INTER_SGSN_RA_LA_UPDAT+INTER_SGSN_RA_LA_UP_S_IN_PS))/(sum(SUCC_INTER_SGSN_RA_UPDAT+FAIL_INTER_SGSN_RAU_GEN+SUCC_INTER_SGSN_RA_LA_UPDAT+FAIL_INTER_SGSN_RA_LA_UP_GEN+INTER_SGSN_RA_LA_UP_S_IN_PS))),4)*100)) RauInterSgsnSR2g
 from 	PCOFNS_PS_GMMLR_CI3_RAW twog,  
			UTP_COMMON_OBJECTS objects
where 
twog.FINS_ID=objects.CO_GID
"""
else:
	sqlstring="""
select 
twog.FINS_ID,
objects.CO_Name MMESGSN,
to_char(twog.period_start_time,'yyyy/mm/dd') Sdate,
to_char(twog.period_start_time,'hh24:mi') Stime,
(sum(SUCC_INTRA_PAPU_RA_UPDAT+SUCC_INTRA_PAPU_RA_LA_UPDAT+SUCC_INTER_PAPU_RA_UPDAT+SUCC_INTER_PAPU_RA_LA_UPDAT)) RauIntraSgsnSucc2g,
(sum(SUCC_INTRA_PAPU_RA_UPDAT+FAIL_INTRA_PAPU_RAU_GEN+SUCC_INTRA_PAPU_RA_LA_UPDAT+FAIL_INTRA_PAPU_RA_LA_UP_GEN+SUCC_INTER_PAPU_RA_UPDAT+FAIL_INTER_PAPU_RAU_GEN+SUCC_INTER_PAPU_RA_LA_UPDAT+FAIL_INTER_PAPU_RA_LA_UP_GEN)) RauIntraSgsnAtt2g,
(sum(FAIL_INTRA_PAPU_RAU_GEN+FAIL_INTRA_PAPU_RA_LA_UP_GEN+ FAIL_INTER_PAPU_RAU_GEN+ FAIL_INTER_PAPU_RA_LA_UP_GEN)) RauIntraSgsnFail2g,
decode(nvl((sum(SUCC_INTRA_PAPU_RA_UPDAT+FAIL_INTRA_PAPU_RAU_GEN+SUCC_INTRA_PAPU_RA_LA_UPDAT+FAIL_INTRA_PAPU_RA_LA_UP_GEN+SUCC_INTER_PAPU_RA_UPDAT+FAIL_INTER_PAPU_RAU_GEN+SUCC_INTER_PAPU_RA_LA_UPDAT+FAIL_INTER_PAPU_RA_LA_UP_GEN)),0),0,0,(round(((sum(SUCC_INTRA_PAPU_RA_UPDAT+SUCC_INTRA_PAPU_RA_LA_UPDAT+SUCC_INTER_PAPU_RA_UPDAT+SUCC_INTER_PAPU_RA_LA_UPDAT))/(sum(SUCC_INTRA_PAPU_RA_UPDAT+FAIL_INTRA_PAPU_RAU_GEN+SUCC_INTRA_PAPU_RA_LA_UPDAT+FAIL_INTRA_PAPU_RA_LA_UP_GEN+SUCC_INTER_PAPU_RA_UPDAT+FAIL_INTER_PAPU_RAU_GEN+SUCC_INTER_PAPU_RA_LA_UPDAT+FAIL_INTER_PAPU_RA_LA_UP_GEN))),4)*100)) RauIntraSgsnSR2g,
(sum(succ_periodical_ra_updat+succ_periodic_ra_la_updat+inter_papu_ra_la_up_s_in_ps+intra_papu_ra_la_up_s_in_ps+periodic_ra_la_up_s_in_ps)) RauPerSucc2g,
(sum(SUCC_INTER_SGSN_RA_UPDAT+SUCC_INTER_SGSN_RA_LA_UPDAT+INTER_SGSN_RA_LA_UP_S_IN_PS)) RauInterSgsnSucc2g,
(sum(SUCC_INTER_SGSN_RA_UPDAT+FAIL_INTER_SGSN_RAU_GEN+SUCC_INTER_SGSN_RA_LA_UPDAT+FAIL_INTER_SGSN_RA_LA_UP_GEN+INTER_SGSN_RA_LA_UP_S_IN_PS)) RauInterSgsnAtt2g,
(sum(FAIL_INTER_SGSN_RAU_GEN+FAIL_INTER_SGSN_RA_LA_UP_GEN)) RauInterSgsnFail2g,
decode(nvl((sum(SUCC_INTER_SGSN_RA_UPDAT+FAIL_INTER_SGSN_RAU_GEN+SUCC_INTER_SGSN_RA_LA_UPDAT+FAIL_INTER_SGSN_RA_LA_UP_GEN+INTER_SGSN_RA_LA_UP_S_IN_PS)),0),0,0,(round(((sum(SUCC_INTER_SGSN_RA_UPDAT+SUCC_INTER_SGSN_RA_LA_UPDAT+INTER_SGSN_RA_LA_UP_S_IN_PS))/(sum(SUCC_INTER_SGSN_RA_UPDAT+FAIL_INTER_SGSN_RAU_GEN+SUCC_INTER_SGSN_RA_LA_UPDAT+FAIL_INTER_SGSN_RA_LA_UP_GEN+INTER_SGSN_RA_LA_UP_S_IN_PS))),4)*100)) RauInterSgsnSR2g
from 	PCOFNS_PS_GMMLR_CI3_RAW twog,  
			UTP_COMMON_OBJECTS objects
where 
twog.FINS_ID=objects.CO_GID
"""

if (selectmmesgsn<>'all'):
	sqlstring=sqlstring+" and objects.co_name= \'"+selectmmesgsn+"\' " 

sqlstringtime=" and to_char(twog.period_start_time,\'yyyy/mm/dd/hh24\')>=\'"+startdate+"/"+starttime+"\' and to_char(twog.period_start_time,\'yyyy/mm/dd/hh24\')<=\'"+stopdate+"/"+stoptime + "\' "

if (selectperiod=='60'):
	sqlstring1=""" 
	group by to_char(twog.period_start_time,'yyyy/mm/dd'), to_char(twog.period_start_time,'hh24'), twog.fins_id, objects.co_name 
	order by objects.co_name,to_char(twog.period_start_time,'yyyy/mm/dd'),to_char(twog.period_start_time,'hh24')
	"""
else:
	sqlstring1="""
	group by to_char(twog.period_start_time,'yyyy/mm/dd'),to_char(twog.period_start_time,'hh24:mi'), twog.fins_ID, objects.co_name 
	order by objects.CO_name,to_char(twog.period_start_time,'yyyy/mm/dd'),to_char(twog.period_start_time,'hh24:mi')
	"""
sqlstring=sqlstring+sqlstringtime+sqlstring1
#print sqlstring

cursor.execute(sqlstring)

row3=cursor.fetchall()
for x in row3:
	if (localsave==0):
		print "<Item>"
	elif localsave==1:
		reportfile.write("\n")
	for y in x:
		if (localsave==0):
			print "<ItemCol>"
			print "<value>"
			print y
			print "</value>"
			print "</ItemCol>"
		elif localsave==1:
			reportfile.write(str(y))
			reportfile.write(',')
	if (localsave==0):
		print "</Item>"
	
	
if (localsave==0):
	print "</location>"
elif localsave==1:
	reportfile.write("\n")

# Paging 2G

if (localsave==0):
	print "<location>"
	print "<locationid>4</locationid>"
	print "<passed>true</passed>"
	print "<message>Paging ͳ�� 2G</message>"
	print "<Title>"
	print "<name>�豸ID</name>"
	print "<name>�豸����</name>"
	print "<name>����</name>"
	print "<name>ʱ��</name>"
	print "<name>Paging���Դ���2G</name>"
	print "<name>Paging�ɹ�����2G</name>"
	print "<name>Paging�ɹ���2G</name>"
	print "</Title>"
elif localsave==1:
	reportfile.write("Paging ͳ�� 2G")
	reportfile.write("\n")
	reportfile.write("�豸ID,")
	reportfile.write("�豸����,")
	reportfile.write("����,")
	reportfile.write("ʱ��,")
	reportfile.write("Paging���Դ���2G,")
	reportfile.write("Paging�ɹ�����2G,")
	reportfile.write("Paging�ɹ���2G")
	
if (selectperiod=='60'):
	sqlstring="""
select
twog.fins_id,
objects.co_name MMESGSN,
to_char(twog.period_start_time,'yyyy/mm/dd') Sdate,
to_char(twog.period_start_time,'hh24') Stime,
sum(SGSN_LEVEL_PS_PAGINGS) pagingatt2g,
sum(SGSN_LEVEL_PS_PAGINGS- SGSN_LEVEL_UNSUCC_PS_PAG) pagingsucc2g,
decode(nvl((sum(SGSN_LEVEL_PS_PAGINGS)),0),0,0,(round((sum(SGSN_LEVEL_PS_PAGINGS- SGSN_LEVEL_UNSUCC_PS_PAG)/(sum(SGSN_LEVEL_PS_PAGINGS))),4)*100)) paging2gSR
from 	PCOFNS_PS_SGPA_FLEXINS_RAW twog,  
			UTP_COMMON_OBJECTS objects
where 
twog.fins_id=objects.co_gid
"""
else:
	sqlstring="""
select
twog.fins_id,
objects.co_name MMESGSN,
to_char(twog.period_start_time,'yyyy/mm/dd') Sdate,
to_char(twog.period_start_time,'hh24:mi') Stime,
sum(SGSN_LEVEL_PS_PAGINGS) pagingatt2g,
sum(SGSN_LEVEL_PS_PAGINGS- SGSN_LEVEL_UNSUCC_PS_PAG) pagingsucc2g,
decode(nvl((sum(SGSN_LEVEL_PS_PAGINGS)),0),0,0,(round((sum(SGSN_LEVEL_PS_PAGINGS- SGSN_LEVEL_UNSUCC_PS_PAG)/(sum(SGSN_LEVEL_PS_PAGINGS))),4)*100)) paging2gSR
from 	PCOFNS_PS_SGPA_FLEXINS_RAW twog,  
			UTP_COMMON_OBJECTS objects
where 
twog.fins_id=objects.co_gid
"""
if (selectmmesgsn<>'all'):
	sqlstring=sqlstring+" and objects.co_name= \'"+selectmmesgsn+"\' " 

sqlstringtime=" and to_char(twog.period_start_time,\'yyyy/mm/dd/hh24\')>=\'"+startdate+"/"+starttime+"\' and to_char(twog.period_start_time,\'yyyy/mm/dd/hh24\')<=\'"+stopdate+"/"+stoptime + "\' "

if (selectperiod=='60'):
	sqlstring1=""" 
	group by to_char(twog.period_start_time,'yyyy/mm/dd'), to_char(twog.period_start_time,'hh24'), twog.fins_id, objects.co_name 
	order by objects.co_name,to_char(twog.period_start_time,'yyyy/mm/dd'),to_char(twog.period_start_time,'hh24')
	"""
else:
	sqlstring1="""
	group by to_char(twog.period_start_time,'yyyy/mm/dd'),to_char(twog.period_start_time,'hh24:mi'), twog.fins_ID, objects.co_name 
	order by objects.CO_name,to_char(twog.period_start_time,'yyyy/mm/dd'),to_char(twog.period_start_time,'hh24:mi')
	"""
sqlstring=sqlstring+sqlstringtime+sqlstring1
#print sqlstring

cursor.execute(sqlstring)

row4=cursor.fetchall()
for x in row4:
	if (localsave==0):
		print "<Item>"
	elif localsave==1:
		reportfile.write("\n")
	for y in x:
		if (localsave==0):
			print "<ItemCol>"
			print "<value>"
			print y
			print "</value>"
			print "</ItemCol>"
		elif localsave==1:
			reportfile.write(str(y))
			reportfile.write(',')
	if (localsave==0):
		print "</Item>"
	
	
if (localsave==0):
	print "</location>"
elif localsave==1:
	reportfile.write("\n")

# Attach 3G and SRNS inter/intra

if (localsave==0):
	print "<location>"
	print "<locationid>5</locationid>"
	print "<passed>true</passed>"
	print "<message>Attach 3G ͳ��</message>"
	print "<Title>"
	print "<name>�豸ID</name>"
	print "<name>�豸����</name>"
	print "<name>����</name>"
	print "<name>ʱ��</name>"
	print "<name>���ųɹ�����3G</name>"
	print "<name>���ų��Դ���3G</name>"
	print "<name>�û�ԭ��ʧ�ܴ���3G</name>"
	print "<name>SRNS InterSGSN���Դ���3G</name>"
	print "<name>SRNS InterSGSN�ɹ�����3G</name>"
	print "<name>SRNS IntraSGSN���Դ���3G</name>"
	print "<name>SRNS IntraSGSN�ɹ�����3G</name>"
	print "<name>SRNS InterSGSN�ɹ���3G</name>"
	print "<name>SRNS IntraSGSN�ɹ���3G</name>"
	print "<name>SRNS �ɹ���3G</name>"
	print "<name>ȥ���û�ԭ���ųɹ���3G</name>"
	print "</Title>"
elif localsave==1:
	reportfile.write("Attach 3G ͳ��")
	reportfile.write("\n")
	reportfile.write("�豸ID,")
	reportfile.write("�豸����,")
	reportfile.write("����,")
	reportfile.write("ʱ��,")
	reportfile.write("���ųɹ�����3G,")
	reportfile.write("���ų��Դ���3G,")
	reportfile.write("�û�ԭ��ʧ�ܴ���3G,")
	reportfile.write("SRNS InterSGSN���Դ���3G,")
	reportfile.write("SRNS InterSGSN�ɹ�����3G,")
	reportfile.write("SRNS IntraSGSN���Դ���3G,")
	reportfile.write("SRNS IntraSGSN�ɹ�����3G,")
	reportfile.write("SRNS InterSGSN�ɹ���3G,")
	reportfile.write("SRNS IntraSGSN�ɹ���3G,")
	reportfile.write("SRNS �ɹ���3G,")
	reportfile.write("ȥ���û�ԭ���ųɹ���3G")

if (selectperiod=='60'):
	sqlstring="""
select 
threeg.FINS_ID,
objects.CO_Name MMESGSN,
to_char(threeg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(threeg.period_start_time,'hh24') Stime,
(SUM(IU_SUCC_GPRS_ATTACH)+SUM(IU_SUCC_COMBINED_ATTACH)) AttachSucc3g,
(SUM(IU_SUCC_GPRS_ATTACH+IU_SUCC_COMBINED_ATTACH+IU_FAIL_GPRS_ATTACH+IU_FAIL_COMB_ATTACH_IN_PS-IU_FAIL_GPRS_ATTACH_MS_ERR-IU_FAIL_GPRS_ATTACH_COLLISIONS)) AttachAttempt3g,
(SUM(IU_FAIL_GPRS_ATTACH_3)+SUM(IU_FAIL_COMB_ATTACH_3)+SUM(IU_FAIL_GPRS_ATTACH_6)+SUM(IU_FAIL_COMB_ATTACH_6)+SUM(IU_FAIL_GPRS_ATTACH_7)+SUM(IU_FAIL_COMB_ATTACH_7)+SUM(IU_FAIL_GPRS_ATTACH_8)+SUM(IU_FAIL_COMB_ATTACH_8+IU_FAIL_GPRS_ATTACH_MS_ERR+IU_FAIL_GPRS_ATTACH_COLLISIONS)) AttachFailUser3g,
(SUM(IU_SUCC_INTER_SGSN_RE+IU_FAIL_INTER_SGSN_RE_RNC)) SRNS_INTERSGSN_ATTEMPTS,
(SUM(IU_SUCC_INTER_SGSN_RE)) SRNS_INTERSGSN_SUCC,
(SUM(IU_SUCC_INTRA_PAPU_RE+IU_FAIL_INTRA_PAPU_RE_SGSN+ IU_FAIL_INTRA_PAPU_RE_RNC+ IU_SUCC_INTER_PAPU_RE+ IU_FAIL_INTER_PAPU_RE_SGSN+ IU_FAIL_INTER_PAPU_RE_RNC)) SRNS_INTRASGSN_ATTEMPTS,
(SUM(IU_SUCC_INTRA_PAPU_RE+IU_SUCC_INTER_PAPU_RE)) SRNS_INTRASGSN_SUCC,
decode(nvl((sum(IU_SUCC_INTER_SGSN_RE+IU_FAIL_INTER_SGSN_RE_RNC)),0),0,0,(round((SUM(IU_SUCC_INTER_SGSN_RE))/((sum(IU_SUCC_INTER_SGSN_RE+IU_FAIL_INTER_SGSN_RE_RNC))),4)*100)) SRNS_INTERSGSN_SR,
decode(nvl((SUM(IU_SUCC_INTRA_PAPU_RE+IU_FAIL_INTRA_PAPU_RE_SGSN+ IU_FAIL_INTRA_PAPU_RE_RNC+ IU_SUCC_INTER_PAPU_RE+ IU_FAIL_INTER_PAPU_RE_SGSN+ IU_FAIL_INTER_PAPU_RE_RNC)),0),0,0,(round((SUM(IU_SUCC_INTRA_PAPU_RE+IU_SUCC_INTER_PAPU_RE))/((SUM(IU_SUCC_INTRA_PAPU_RE+IU_FAIL_INTRA_PAPU_RE_SGSN+ IU_FAIL_INTRA_PAPU_RE_RNC+ IU_SUCC_INTER_PAPU_RE+ IU_FAIL_INTER_PAPU_RE_SGSN+ IU_FAIL_INTER_PAPU_RE_RNC))),4)*100)) SRNS_INTRASGSN_SR,
decode(nvl((SUM(IU_SUCC_INTER_SGSN_RE+IU_FAIL_INTER_SGSN_RE_RNC)+SUM(IU_SUCC_INTRA_PAPU_RE+IU_FAIL_INTRA_PAPU_RE_SGSN+ IU_FAIL_INTRA_PAPU_RE_RNC+ IU_SUCC_INTER_PAPU_RE+ IU_FAIL_INTER_PAPU_RE_SGSN+ IU_FAIL_INTER_PAPU_RE_RNC)),0),0,0,(round((SUM(IU_SUCC_INTRA_PAPU_RE+IU_SUCC_INTER_PAPU_RE)+SUM(IU_SUCC_INTER_SGSN_RE))/((SUM(IU_SUCC_INTER_SGSN_RE+IU_FAIL_INTER_SGSN_RE_RNC)+SUM(IU_SUCC_INTRA_PAPU_RE+IU_FAIL_INTRA_PAPU_RE_SGSN+ IU_FAIL_INTRA_PAPU_RE_RNC+ IU_SUCC_INTER_PAPU_RE+ IU_FAIL_INTER_PAPU_RE_SGSN+ IU_FAIL_INTER_PAPU_RE_RNC))),4)*100)) SRNS_SR,
decode(nvl(SUM(IU_SUCC_GPRS_ATTACH+IU_SUCC_COMBINED_ATTACH+IU_FAIL_GPRS_ATTACH+IU_FAIL_COMB_ATTACH_IN_PS-IU_FAIL_GPRS_ATTACH_MS_ERR-IU_FAIL_GPRS_ATTACH_COLLISIONS-IU_FAIL_GPRS_ATTACH_3-IU_FAIL_COMB_ATTACH_3-IU_FAIL_GPRS_ATTACH_6-IU_FAIL_COMB_ATTACH_6-IU_FAIL_GPRS_ATTACH_7-IU_FAIL_COMB_ATTACH_7-IU_FAIL_GPRS_ATTACH_8-IU_FAIL_COMB_ATTACH_8),0),0,0,(round(SUM(IU_SUCC_GPRS_ATTACH+IU_SUCC_COMBINED_ATTACH)/((SUM(IU_SUCC_GPRS_ATTACH+IU_SUCC_COMBINED_ATTACH+IU_FAIL_GPRS_ATTACH+IU_FAIL_COMB_ATTACH_IN_PS-IU_FAIL_GPRS_ATTACH_MS_ERR-IU_FAIL_GPRS_ATTACH_COLLISIONS-IU_FAIL_GPRS_ATTACH_3-IU_FAIL_COMB_ATTACH_3-IU_FAIL_GPRS_ATTACH_6-IU_FAIL_COMB_ATTACH_6-IU_FAIL_GPRS_ATTACH_7-IU_FAIL_COMB_ATTACH_7-IU_FAIL_GPRS_ATTACH_8-IU_FAIL_COMB_ATTACH_8))),4)*100)) AttachSR3G
from 	PCOFNS_PS_IUMLR_SAC1_RAW threeg, 
			UTP_COMMON_OBJECTS objects
where 
threeg.FINS_ID=objects.CO_GID
"""
else:
	sqlstring="""
select 
threeg.FINS_ID,
objects.CO_Name MMESGSN,
to_char(threeg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(threeg.period_start_time,'hh24:mi') Stime,
(SUM(IU_SUCC_GPRS_ATTACH)+SUM(IU_SUCC_COMBINED_ATTACH)) AttachSucc3g,
(SUM(IU_SUCC_GPRS_ATTACH+IU_SUCC_COMBINED_ATTACH+IU_FAIL_GPRS_ATTACH+IU_FAIL_COMB_ATTACH_IN_PS-IU_FAIL_GPRS_ATTACH_MS_ERR-IU_FAIL_GPRS_ATTACH_COLLISIONS)) AttachAttempt3g,
(SUM(IU_FAIL_GPRS_ATTACH_3)+SUM(IU_FAIL_COMB_ATTACH_3)+SUM(IU_FAIL_GPRS_ATTACH_6)+SUM(IU_FAIL_COMB_ATTACH_6)+SUM(IU_FAIL_GPRS_ATTACH_7)+SUM(IU_FAIL_COMB_ATTACH_7)+SUM(IU_FAIL_GPRS_ATTACH_8)+SUM(IU_FAIL_COMB_ATTACH_8+IU_FAIL_GPRS_ATTACH_MS_ERR+IU_FAIL_GPRS_ATTACH_COLLISIONS)) AttachFailUser3g,
(SUM(IU_SUCC_INTER_SGSN_RE+IU_FAIL_INTER_SGSN_RE_RNC)) SRNS_INTERSGSN_ATTEMPTS,
(SUM(IU_SUCC_INTER_SGSN_RE)) SRNS_INTERSGSN_SUCC,
(SUM(IU_SUCC_INTRA_PAPU_RE+IU_FAIL_INTRA_PAPU_RE_SGSN+ IU_FAIL_INTRA_PAPU_RE_RNC+ IU_SUCC_INTER_PAPU_RE+ IU_FAIL_INTER_PAPU_RE_SGSN+ IU_FAIL_INTER_PAPU_RE_RNC)) SRNS_INTRASGSN_ATTEMPTS,
(SUM(IU_SUCC_INTRA_PAPU_RE+IU_SUCC_INTER_PAPU_RE)) SRNS_INTRASGSN_SUCC,
decode(nvl((sum(IU_SUCC_INTER_SGSN_RE+IU_FAIL_INTER_SGSN_RE_RNC)),0),0,0,(round((SUM(IU_SUCC_INTER_SGSN_RE))/((sum(IU_SUCC_INTER_SGSN_RE+IU_FAIL_INTER_SGSN_RE_RNC))),4)*100)) SRNS_INTERSGSN_SR,
decode(nvl((SUM(IU_SUCC_INTRA_PAPU_RE+IU_FAIL_INTRA_PAPU_RE_SGSN+ IU_FAIL_INTRA_PAPU_RE_RNC+ IU_SUCC_INTER_PAPU_RE+ IU_FAIL_INTER_PAPU_RE_SGSN+ IU_FAIL_INTER_PAPU_RE_RNC)),0),0,0,(round((SUM(IU_SUCC_INTRA_PAPU_RE+IU_SUCC_INTER_PAPU_RE))/((SUM(IU_SUCC_INTRA_PAPU_RE+IU_FAIL_INTRA_PAPU_RE_SGSN+ IU_FAIL_INTRA_PAPU_RE_RNC+ IU_SUCC_INTER_PAPU_RE+ IU_FAIL_INTER_PAPU_RE_SGSN+ IU_FAIL_INTER_PAPU_RE_RNC))),4)*100)) SRNS_INTRASGSN_SR,
decode(nvl((SUM(IU_SUCC_INTER_SGSN_RE+IU_FAIL_INTER_SGSN_RE_RNC)+SUM(IU_SUCC_INTRA_PAPU_RE+IU_FAIL_INTRA_PAPU_RE_SGSN+ IU_FAIL_INTRA_PAPU_RE_RNC+ IU_SUCC_INTER_PAPU_RE+ IU_FAIL_INTER_PAPU_RE_SGSN+ IU_FAIL_INTER_PAPU_RE_RNC)),0),0,0,(round((SUM(IU_SUCC_INTRA_PAPU_RE+IU_SUCC_INTER_PAPU_RE)+SUM(IU_SUCC_INTER_SGSN_RE))/((SUM(IU_SUCC_INTER_SGSN_RE+IU_FAIL_INTER_SGSN_RE_RNC)+SUM(IU_SUCC_INTRA_PAPU_RE+IU_FAIL_INTRA_PAPU_RE_SGSN+ IU_FAIL_INTRA_PAPU_RE_RNC+ IU_SUCC_INTER_PAPU_RE+ IU_FAIL_INTER_PAPU_RE_SGSN+ IU_FAIL_INTER_PAPU_RE_RNC))),4)*100)) SRNS_SR,
decode(nvl(SUM(IU_SUCC_GPRS_ATTACH+IU_SUCC_COMBINED_ATTACH+IU_FAIL_GPRS_ATTACH+IU_FAIL_COMB_ATTACH_IN_PS-IU_FAIL_GPRS_ATTACH_MS_ERR-IU_FAIL_GPRS_ATTACH_COLLISIONS-IU_FAIL_GPRS_ATTACH_3-IU_FAIL_COMB_ATTACH_3-IU_FAIL_GPRS_ATTACH_6-IU_FAIL_COMB_ATTACH_6-IU_FAIL_GPRS_ATTACH_7-IU_FAIL_COMB_ATTACH_7-IU_FAIL_GPRS_ATTACH_8-IU_FAIL_COMB_ATTACH_8),0),0,0,(round(SUM(IU_SUCC_GPRS_ATTACH+IU_SUCC_COMBINED_ATTACH)/((SUM(IU_SUCC_GPRS_ATTACH+IU_SUCC_COMBINED_ATTACH+IU_FAIL_GPRS_ATTACH+IU_FAIL_COMB_ATTACH_IN_PS-IU_FAIL_GPRS_ATTACH_MS_ERR-IU_FAIL_GPRS_ATTACH_COLLISIONS-IU_FAIL_GPRS_ATTACH_3-IU_FAIL_COMB_ATTACH_3-IU_FAIL_GPRS_ATTACH_6-IU_FAIL_COMB_ATTACH_6-IU_FAIL_GPRS_ATTACH_7-IU_FAIL_COMB_ATTACH_7-IU_FAIL_GPRS_ATTACH_8-IU_FAIL_COMB_ATTACH_8))),4)*100)) AttachSR3G
from 	PCOFNS_PS_IUMLR_SAC1_RAW threeg, 
			UTP_COMMON_OBJECTS objects
where 
threeg.FINS_ID=objects.CO_GID
"""
if (selectmmesgsn<>'all'):
	sqlstring=sqlstring+" and objects.co_name= \'"+selectmmesgsn+"\' " 

sqlstringtime=" and to_char(threeg.period_start_time,\'yyyy/mm/dd/hh24\')>=\'"+startdate+"/"+starttime+"\' and to_char(threeg.period_start_time,\'yyyy/mm/dd/hh24\')<=\'"+stopdate+"/"+stoptime + "\' "

if (selectperiod=='60'):
	sqlstring1=""" 
	group by to_char(threeg.period_start_time,'yyyy/mm/dd'), to_char(threeg.period_start_time,'hh24'), threeg.fins_id, objects.co_name 
	order by objects.co_name,to_char(threeg.period_start_time,'yyyy/mm/dd'),to_char(threeg.period_start_time,'hh24')
	"""
else:
	sqlstring1="""
	group by to_char(threeg.period_start_time,'yyyy/mm/dd'),to_char(threeg.period_start_time,'hh24:mi'), threeg.fins_ID, objects.co_name 
	order by objects.CO_name,to_char(threeg.period_start_time,'yyyy/mm/dd'),to_char(threeg.period_start_time,'hh24:mi')
	"""
sqlstring=sqlstring+sqlstringtime+sqlstring1
#print sqlstring

cursor.execute(sqlstring)

row5=cursor.fetchall()
for x in row5:
	if (localsave==0):
		print "<Item>"
	elif localsave==1:
		reportfile.write("\n")
	for y in x:
		if (localsave==0):
			print "<ItemCol>"
			print "<value>"
			print y
			print "</value>"
			print "</ItemCol>"
		elif localsave==1:
			reportfile.write(str(y))
			reportfile.write(',')
	if (localsave==0):
		print "</Item>"
	
	
if (localsave==0):
	print "</location>"
elif localsave==1:
	reportfile.write("\n")

# PDP Activate 3G

if (localsave==0):
	print "<location>"
	print "<locationid>6</locationid>"
	print "<passed>true</passed>"
	print "<message>PDP ����ͳ�� 3G</message>"
	print "<Title>"
	print "<name>�豸ID</name>"
	print "<name>�豸����</name>"
	print "<name>����</name>"
	print "<name>ʱ��</name>"
	print "<name>PDP����ɹ�����3G</name>"
	print "<name>PDP����Դ���3G</name>"
	print "<name>�û�ԭ��ʧ�ܴ���3G</name>"
	print "<name>ȥԭ��PDP�ɹ���3G</name>"
	print "</Title>"
elif localsave==1:
	reportfile.write("PDP ����ͳ�� 3G")
	reportfile.write("\n")
	reportfile.write("�豸ID,")
	reportfile.write("�豸����,")
	reportfile.write("����,")
	reportfile.write("ʱ��,")
	reportfile.write("PDP����ɹ�����3G,")
	reportfile.write("PDP����Դ���3G,")
	reportfile.write("�û�ԭ��ʧ�ܴ���3G,")
	reportfile.write("ȥԭ��PDP�ɹ���3G")

if (selectperiod=='60'):
	sqlstring="""
select
threeg.fins_id,
objects.CO_NAME MMESGSN,
to_char(threeg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(threeg.period_start_time,'hh24') Stime,
sum(IU_SUCC_MO_PDP_CON_ACT) PdpSucc3g,
sum(IU_SUCC_MO_PDP_CON_ACT+IU_FAIL_MO_PDP_CON_ACT) PdpAtt3g,
sum(IU_FAIL_MO_PDP_ACT_27+IU_FAIL_MO_PDP_ACT_28+IU_FAIL_MO_PDP_ACT_29+IU_FAIL_MO_PDP_ACT_32+IU_FAIL_MO_PDP_ACT_33) PdpFailUser3g,
decode(nvl((sum(IU_SUCC_MO_PDP_CON_ACT+IU_FAIL_MO_PDP_CON_ACT)),0),0,0,(round((sum(IU_SUCC_MO_PDP_CON_ACT)/(sum(IU_SUCC_MO_PDP_CON_ACT+IU_FAIL_MO_PDP_CON_ACT-(IU_FAIL_MO_PDP_ACT_27+IU_FAIL_MO_PDP_ACT_28+IU_FAIL_MO_PDP_ACT_29+IU_FAIL_MO_PDP_ACT_32+IU_FAIL_MO_PDP_ACT_33)))),4)*100)) PdpSR3g
from 	PCOFNS_PS_IUSM2_SAC1_RAW threeg,
			UTP_COMMON_OBJECTS objects
where 
threeg.fins_id=objects.co_gid
"""
else:
	sqlstring="""
select
threeg.fins_id,
objects.CO_NAME MMESGSN,
to_char(threeg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(threeg.period_start_time,'hh24:mi') Stime,
sum(IU_SUCC_MO_PDP_CON_ACT) PdpSucc3g,
sum(IU_SUCC_MO_PDP_CON_ACT+IU_FAIL_MO_PDP_CON_ACT) PdpAtt3g,
sum(IU_FAIL_MO_PDP_ACT_27+IU_FAIL_MO_PDP_ACT_28+IU_FAIL_MO_PDP_ACT_29+IU_FAIL_MO_PDP_ACT_32+IU_FAIL_MO_PDP_ACT_33) PdpFailUser3g,
decode(nvl((sum(IU_SUCC_MO_PDP_CON_ACT+IU_FAIL_MO_PDP_CON_ACT)),0),0,0,(round((sum(IU_SUCC_MO_PDP_CON_ACT)/(sum(IU_SUCC_MO_PDP_CON_ACT+IU_FAIL_MO_PDP_CON_ACT-(IU_FAIL_MO_PDP_ACT_27+IU_FAIL_MO_PDP_ACT_28+IU_FAIL_MO_PDP_ACT_29+IU_FAIL_MO_PDP_ACT_32+IU_FAIL_MO_PDP_ACT_33)))),4)*100)) PdpSR3g
from 	PCOFNS_PS_IUSM2_SAC1_RAW threeg,
			UTP_COMMON_OBJECTS objects
where 
threeg.fins_id=objects.co_gid
"""
if (selectmmesgsn<>'all'):
	sqlstring=sqlstring+" and objects.co_name= \'"+selectmmesgsn+"\' " 

sqlstringtime=" and to_char(threeg.period_start_time,\'yyyy/mm/dd/hh24\')>=\'"+startdate+"/"+starttime+"\' and to_char(threeg.period_start_time,\'yyyy/mm/dd/hh24\')<=\'"+stopdate+"/"+stoptime + "\' "

if (selectperiod=='60'):
	sqlstring1=""" 
	group by to_char(threeg.period_start_time,'yyyy/mm/dd'), to_char(threeg.period_start_time,'hh24'), threeg.fins_id, objects.co_name 
	order by objects.co_name,to_char(threeg.period_start_time,'yyyy/mm/dd'),to_char(threeg.period_start_time,'hh24')
	"""
else:
	sqlstring1="""
	group by to_char(threeg.period_start_time,'yyyy/mm/dd'),to_char(threeg.period_start_time,'hh24:mi'), threeg.fins_ID, objects.co_name 
	order by objects.CO_name,to_char(threeg.period_start_time,'yyyy/mm/dd'),to_char(threeg.period_start_time,'hh24:mi')
	"""
sqlstring=sqlstring+sqlstringtime+sqlstring1
#print sqlstring

cursor.execute(sqlstring)

row6=cursor.fetchall()
for x in row6:
	if (localsave==0):
		print "<Item>"
	elif localsave==1:
		reportfile.write("\n")
	for y in x:
		if (localsave==0):
			print "<ItemCol>"
			print "<value>"
			print y
			print "</value>"
			print "</ItemCol>"
		elif localsave==1:
			reportfile.write(str(y))
			reportfile.write(',')
	if (localsave==0):
		print "</Item>"
	
	
if (localsave==0):
	print "</location>"
elif localsave==1:
	reportfile.write("\n")

# RAU ͳ�� 3G

if (localsave==0):
	print "<location>"
	print "<locationid>7</locationid>"
	print "<passed>true</passed>"
	print "<message>RAU ͳ�� 3G</message>"
	print "<Title>"
	print "<name>�豸ID</name>"
	print "<name>�豸����</name>"
	print "<name>����</name>"
	print "<name>ʱ��</name>"
	print "<name>RAU INTRA�ɹ�����3G</name>"
	print "<name>RAU INTRAʧ�ܴ���3G</name>"
	print "<name>RAU INTRA�ɹ���3G</name>"
	print "<name>RAU INTER�ɹ�����3G</name>"
	print "<name>RAU INTERʧ�ܴ���3G</name>"
	print "<name>RAU INTER�ɹ���3G</name>"
	print "</Title>"
elif localsave==1:
	reportfile.write("RAU ͳ�� 3G")
	reportfile.write("\n")
	reportfile.write("�豸ID,")
	reportfile.write("�豸����,")
	reportfile.write("����,")
	reportfile.write("ʱ��,")
	reportfile.write("RAU INTRA�ɹ�����3G,")
	reportfile.write("RAU INTRAʧ�ܴ���3G,")
	reportfile.write("RAU INTRA�ɹ���3G,")
	reportfile.write("RAU INTER�ɹ�����3G,")
	reportfile.write("RAU INTERʧ�ܴ���3G,")
	reportfile.write("RAU INTER�ɹ���3G")

if (selectperiod=='60'):
	sqlstring="""
select 
threeg.fins_ID,
objects.co_Name MMESGSN,
to_char(threeg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(threeg.period_start_time,'hh24') Stime,
(sum(IU_SUCC_IN_INTRA_PAPU_RA_UPD+IU_SUCC_IN_INTER_PAPU_RA_UPD+IU_SUCC_COMB_INTRA_PAPU_UPD+IU_SUCC_COMB_INTRA_PAPU_UPD_PS+IU_SUCC_COMB_INTER_PAPU_UPD+IU_SUCC_COMB_INTER_PAPU_UPD_PS)) RauIntraSgsnSucc3g,
(sum(IU_FAIL_IN_INTRA_PAPU_RA_UPD+IU_FAIL_IN_INTER_PAPU_RA_UPD+IU_FAIL_COMB_INTRA_PAPU_UPD_PS+IU_FAIL_COMB_INTER_PAPU_UPD_PS)) RauIntraSgsnFail3g,
decode(nvl((sum(IU_SUCC_IN_INTRA_PAPU_RA_UPD+IU_FAIL_IN_INTRA_PAPU_RA_UPD+IU_SUCC_IN_INTER_PAPU_RA_UPD+IU_FAIL_IN_INTER_PAPU_RA_UPD+IU_SUCC_COMB_INTRA_PAPU_UPD+IU_FAIL_COMB_INTRA_PAPU_UPD_PS+IU_SUCC_COMB_INTRA_PAPU_UPD_PS+IU_SUCC_COMB_INTER_PAPU_UPD+IU_FAIL_COMB_INTER_PAPU_UPD_PS+IU_SUCC_COMB_INTER_PAPU_UPD_PS)),0),0,0,(round(((sum(IU_SUCC_IN_INTRA_PAPU_RA_UPD+IU_SUCC_IN_INTER_PAPU_RA_UPD+IU_SUCC_COMB_INTRA_PAPU_UPD+IU_SUCC_COMB_INTRA_PAPU_UPD_PS+IU_SUCC_COMB_INTER_PAPU_UPD+IU_SUCC_COMB_INTER_PAPU_UPD_PS))/(sum(IU_SUCC_IN_INTRA_PAPU_RA_UPD+IU_FAIL_IN_INTRA_PAPU_RA_UPD+IU_SUCC_IN_INTER_PAPU_RA_UPD+IU_FAIL_IN_INTER_PAPU_RA_UPD+IU_SUCC_COMB_INTRA_PAPU_UPD+IU_FAIL_COMB_INTRA_PAPU_UPD_PS+IU_SUCC_COMB_INTRA_PAPU_UPD_PS+IU_SUCC_COMB_INTER_PAPU_UPD+IU_FAIL_COMB_INTER_PAPU_UPD_PS+IU_SUCC_COMB_INTER_PAPU_UPD_PS))),4)*100)) RauIntraSgsnSR3g,
(sum(IU_SUCC_IN_INTER_SGSN_RA_UPD+ IU_SUCC_OG_INTER_SGSN_RA_UPD+IU_SUCC_COMB_INTER_SGSN_UPD+IU_SUCC_COMB_INTER_SGSN_UPD_PS)) RauInterSgsnSucc3g,
(sum(IU_FAIL_IN_INTER_SGSN_RA_UPD+IU_FAIL_OG_INTER_SGSN_RA_UPD+IU_FAIL_COMB_INTER_SGSN_UPD_PS)) RauInterSgsnFail3g,
decode(nvl((sum(IU_SUCC_IN_INTER_SGSN_RA_UPD+IU_FAIL_IN_INTER_SGSN_RA_UPD+IU_SUCC_OG_INTER_SGSN_RA_UPD+IU_FAIL_OG_INTER_SGSN_RA_UPD+IU_SUCC_COMB_INTER_SGSN_UPD+IU_FAIL_COMB_INTER_SGSN_UPD_PS+IU_SUCC_COMB_INTER_SGSN_UPD_PS)),0),0,0,(round(((sum(IU_SUCC_IN_INTER_SGSN_RA_UPD+ IU_SUCC_OG_INTER_SGSN_RA_UPD+IU_SUCC_COMB_INTER_SGSN_UPD+IU_SUCC_COMB_INTER_SGSN_UPD_PS))/(sum(IU_SUCC_IN_INTER_SGSN_RA_UPD+IU_FAIL_IN_INTER_SGSN_RA_UPD+IU_SUCC_OG_INTER_SGSN_RA_UPD+IU_FAIL_OG_INTER_SGSN_RA_UPD+IU_SUCC_COMB_INTER_SGSN_UPD+IU_FAIL_COMB_INTER_SGSN_UPD_PS+IU_SUCC_COMB_INTER_SGSN_UPD_PS))),4)*100)) RauInterSgsnSR3g
from 	PCOFNS_PS_IUMLR_SAC1_RAW threeg, 
			UTP_COMMON_OBJECTS objects
where 
threeg.fins_ID=objects.co_gid
"""
else:
	sqlstring="""
select 
threeg.fins_ID,
objects.co_Name MMESGSN,
to_char(threeg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(threeg.period_start_time,'hh24:mi') Stime,
(sum(IU_SUCC_IN_INTRA_PAPU_RA_UPD+IU_SUCC_IN_INTER_PAPU_RA_UPD+IU_SUCC_COMB_INTRA_PAPU_UPD+IU_SUCC_COMB_INTRA_PAPU_UPD_PS+IU_SUCC_COMB_INTER_PAPU_UPD+IU_SUCC_COMB_INTER_PAPU_UPD_PS)) RauIntraSgsnSucc3g,
(sum(IU_FAIL_IN_INTRA_PAPU_RA_UPD+IU_FAIL_IN_INTER_PAPU_RA_UPD+IU_FAIL_COMB_INTRA_PAPU_UPD_PS+IU_FAIL_COMB_INTER_PAPU_UPD_PS)) RauIntraSgsnFail3g,
decode(nvl((sum(IU_SUCC_IN_INTRA_PAPU_RA_UPD+IU_FAIL_IN_INTRA_PAPU_RA_UPD+IU_SUCC_IN_INTER_PAPU_RA_UPD+IU_FAIL_IN_INTER_PAPU_RA_UPD+IU_SUCC_COMB_INTRA_PAPU_UPD+IU_FAIL_COMB_INTRA_PAPU_UPD_PS+IU_SUCC_COMB_INTRA_PAPU_UPD_PS+IU_SUCC_COMB_INTER_PAPU_UPD+IU_FAIL_COMB_INTER_PAPU_UPD_PS+IU_SUCC_COMB_INTER_PAPU_UPD_PS)),0),0,0,(round(((sum(IU_SUCC_IN_INTRA_PAPU_RA_UPD+IU_SUCC_IN_INTER_PAPU_RA_UPD+IU_SUCC_COMB_INTRA_PAPU_UPD+IU_SUCC_COMB_INTRA_PAPU_UPD_PS+IU_SUCC_COMB_INTER_PAPU_UPD+IU_SUCC_COMB_INTER_PAPU_UPD_PS))/(sum(IU_SUCC_IN_INTRA_PAPU_RA_UPD+IU_FAIL_IN_INTRA_PAPU_RA_UPD+IU_SUCC_IN_INTER_PAPU_RA_UPD+IU_FAIL_IN_INTER_PAPU_RA_UPD+IU_SUCC_COMB_INTRA_PAPU_UPD+IU_FAIL_COMB_INTRA_PAPU_UPD_PS+IU_SUCC_COMB_INTRA_PAPU_UPD_PS+IU_SUCC_COMB_INTER_PAPU_UPD+IU_FAIL_COMB_INTER_PAPU_UPD_PS+IU_SUCC_COMB_INTER_PAPU_UPD_PS))),4)*100)) RauIntraSgsnSR3g,
(sum(IU_SUCC_IN_INTER_SGSN_RA_UPD+ IU_SUCC_OG_INTER_SGSN_RA_UPD+IU_SUCC_COMB_INTER_SGSN_UPD+IU_SUCC_COMB_INTER_SGSN_UPD_PS)) RauInterSgsnSucc3g,
(sum(IU_FAIL_IN_INTER_SGSN_RA_UPD+IU_FAIL_OG_INTER_SGSN_RA_UPD+IU_FAIL_COMB_INTER_SGSN_UPD_PS)) RauInterSgsnFail3g,
decode(nvl((sum(IU_SUCC_IN_INTER_SGSN_RA_UPD+IU_FAIL_IN_INTER_SGSN_RA_UPD+IU_SUCC_OG_INTER_SGSN_RA_UPD+IU_FAIL_OG_INTER_SGSN_RA_UPD+IU_SUCC_COMB_INTER_SGSN_UPD+IU_FAIL_COMB_INTER_SGSN_UPD_PS+IU_SUCC_COMB_INTER_SGSN_UPD_PS)),0),0,0,(round(((sum(IU_SUCC_IN_INTER_SGSN_RA_UPD+ IU_SUCC_OG_INTER_SGSN_RA_UPD+IU_SUCC_COMB_INTER_SGSN_UPD+IU_SUCC_COMB_INTER_SGSN_UPD_PS))/(sum(IU_SUCC_IN_INTER_SGSN_RA_UPD+IU_FAIL_IN_INTER_SGSN_RA_UPD+IU_SUCC_OG_INTER_SGSN_RA_UPD+IU_FAIL_OG_INTER_SGSN_RA_UPD+IU_SUCC_COMB_INTER_SGSN_UPD+IU_FAIL_COMB_INTER_SGSN_UPD_PS+IU_SUCC_COMB_INTER_SGSN_UPD_PS))),4)*100)) RauInterSgsnSR3g
from 	PCOFNS_PS_IUMLR_SAC1_RAW threeg, 
			UTP_COMMON_OBJECTS objects
where 
threeg.fins_ID=objects.co_gid
"""
if (selectmmesgsn<>'all'):
	sqlstring=sqlstring+" and objects.co_name= \'"+selectmmesgsn+"\' " 

sqlstringtime=" and to_char(threeg.period_start_time,\'yyyy/mm/dd/hh24\')>=\'"+startdate+"/"+starttime+"\' and to_char(threeg.period_start_time,\'yyyy/mm/dd/hh24\')<=\'"+stopdate+"/"+stoptime + "\' "

if (selectperiod=='60'):
	sqlstring1=""" 
	group by to_char(threeg.period_start_time,'yyyy/mm/dd'), to_char(threeg.period_start_time,'hh24'), threeg.fins_id, objects.co_name 
	order by objects.co_name,to_char(threeg.period_start_time,'yyyy/mm/dd'),to_char(threeg.period_start_time,'hh24')
	"""
else:
	sqlstring1="""
	group by to_char(threeg.period_start_time,'yyyy/mm/dd'),to_char(threeg.period_start_time,'hh24:mi'), threeg.fins_ID, objects.co_name 
	order by objects.CO_name,to_char(threeg.period_start_time,'yyyy/mm/dd'),to_char(threeg.period_start_time,'hh24:mi')
	"""
sqlstring=sqlstring+sqlstringtime+sqlstring1
#print sqlstring

cursor.execute(sqlstring)

row7=cursor.fetchall()
for x in row7:
	if (localsave==0):
		print "<Item>"
	elif localsave==1:
		reportfile.write("\n")
	for y in x:
		if (localsave==0):
			print "<ItemCol>"
			print "<value>"
			print y
			print "</value>"
			print "</ItemCol>"
		elif localsave==1:
			reportfile.write(str(y))
			reportfile.write(',')
	if (localsave==0):
		print "</Item>"
	
	
if (localsave==0):
	print "</location>"
elif localsave==1:
	reportfile.write("\n")

# Paging 3G

if (localsave==0):
	print "<location>"
	print "<locationid>8</locationid>"
	print "<passed>true</passed>"
	print "<message>Paging ͳ�� 3G</message>"
	print "<Title>"
	print "<name>�豸ID</name>"
	print "<name>�豸����</name>"
	print "<name>����</name>"
	print "<name>ʱ��</name>"
	print "<name>Paging���Դ���3G</name>"
	print "<name>Paging�ɹ�����3G</name>"
	print "<name>Paging�ɹ���3G</name>"
	print "</Title>"
elif localsave==1:
	reportfile.write("Paging ͳ�� 3G")
	reportfile.write("\n")
	reportfile.write("�豸ID,")
	reportfile.write("�豸����,")
	reportfile.write("����,")
	reportfile.write("ʱ��,")
	reportfile.write("Paging���Դ���3G,")
	reportfile.write("Paging�ɹ�����3G,")
	reportfile.write("Paging�ɹ���3G")

if (selectperiod=='60'):
	sqlstring="""
select
threeg.fins_ID,
objects.co_Name MMESGSN,
to_char(threeg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(threeg.period_start_time,'hh24') Stime,
sum(SGSN_LEVEL_IU_PS_PAGINGS) pagingatt3g,
sum(SGSN_LEVEL_IU_PS_PAGINGS- SGSN_LEVEL_UNSUCC_IU_PS_PAG) pagingsucc3g,
decode(nvl((sum(SGSN_LEVEL_IU_PS_PAGINGS)),0),0,0,(round((sum(SGSN_LEVEL_IU_PS_PAGINGS- SGSN_LEVEL_UNSUCC_IU_PS_PAG)/(sum(SGSN_LEVEL_IU_PS_PAGINGS))),4)*100)) paging3gSR
from 	PCOFNS_PS_IUSP_FLEXINS_RAW threeg,  
			UTP_COMMON_OBJECTS objects
where 
threeg.fins_id=objects.co_gid
"""
else:
	sqlstring="""
select
threeg.fins_ID,
objects.co_Name MMESGSN,
to_char(threeg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(threeg.period_start_time,'hh24:mi') Stime,
sum(SGSN_LEVEL_IU_PS_PAGINGS) pagingatt3g,
sum(SGSN_LEVEL_IU_PS_PAGINGS- SGSN_LEVEL_UNSUCC_IU_PS_PAG) pagingsucc3g,
decode(nvl((sum(SGSN_LEVEL_IU_PS_PAGINGS)),0),0,0,(round((sum(SGSN_LEVEL_IU_PS_PAGINGS- SGSN_LEVEL_UNSUCC_IU_PS_PAG)/(sum(SGSN_LEVEL_IU_PS_PAGINGS))),4)*100)) paging3gSR
from 	PCOFNS_PS_IUSP_FLEXINS_RAW threeg,  
			UTP_COMMON_OBJECTS objects
where 
threeg.fins_id=objects.co_gid
"""
if (selectmmesgsn<>'all'):
	sqlstring=sqlstring+" and objects.co_name= \'"+selectmmesgsn+"\' " 

sqlstringtime=" and to_char(threeg.period_start_time,\'yyyy/mm/dd/hh24\')>=\'"+startdate+"/"+starttime+"\' and to_char(threeg.period_start_time,\'yyyy/mm/dd/hh24\')<=\'"+stopdate+"/"+stoptime + "\' "

if (selectperiod=='60'):
	sqlstring1=""" 
	group by to_char(threeg.period_start_time,'yyyy/mm/dd'), to_char(threeg.period_start_time,'hh24'), threeg.fins_id, objects.co_name 
	order by objects.co_name,to_char(threeg.period_start_time,'yyyy/mm/dd'),to_char(threeg.period_start_time,'hh24')
	"""
else:
	sqlstring1="""
	group by to_char(threeg.period_start_time,'yyyy/mm/dd'),to_char(threeg.period_start_time,'hh24:mi'), threeg.fins_ID, objects.co_name 
	order by objects.CO_name,to_char(threeg.period_start_time,'yyyy/mm/dd'),to_char(threeg.period_start_time,'hh24:mi')
	"""
sqlstring=sqlstring+sqlstringtime+sqlstring1
#print sqlstring

cursor.execute(sqlstring)

row8=cursor.fetchall()
for x in row8:
	if (localsave==0):
		print "<Item>"
	elif localsave==1:
		reportfile.write("\n")
	for y in x:
		if (localsave==0):
			print "<ItemCol>"
			print "<value>"
			print y
			print "</value>"
			print "</ItemCol>"
		elif localsave==1:
			reportfile.write(str(y))
			reportfile.write(',')
	if (localsave==0):
		print "</Item>"
	
	
if (localsave==0):
	print "</location>"
elif localsave==1:
	reportfile.write("\n")

# �û���ͳ�� 2/3/4G

if (localsave==0):
	print "<location>"
	print "<locationid>9</locationid>"
	print "<passed>true</passed>"
	print "<message>�û�ͳ�� 2/3/4G</message>"
	print "<Title>"
	print "<name>�豸ID</name>"
	print "<name>�豸����</name>"
	print "<name>����</name>"
	print "<name>ʱ��</name>"
	print "<name>�û���2G</name>"
	print "<name>�û���3G</name>"
	print "<name>ƽ���û���2G+3G</name>"
	print "<name>����û���2G+3G</name>"
	print "<name>���������2G+3G</name>"
	print "<name>�û���4G IDLE</name>"
	print "<name>�û���4G CONN</name>"
	print "<name>�û�����4G</name>"
	print "<name>OVERLOAD_CONTROL_DROP_PROC</name>"
	print "</Title>"
elif localsave==1:
	reportfile.write("�û�ͳ�� 2/3/4G")
	reportfile.write("\n")
	reportfile.write("�豸ID,")
	reportfile.write("�豸����,")
	reportfile.write("����,")
	reportfile.write("ʱ��,")
	reportfile.write("�û���2G,")
	reportfile.write("�û���3G,")
	reportfile.write("ƽ���û���2G+3G,")
	reportfile.write("����û���2G+3G,")
	reportfile.write("���������2G+3G,")
	reportfile.write("�û���4G IDLE,")
	reportfile.write("�û���4G CONN,")
	reportfile.write("�û�����4G,")
	reportfile.write("OVERLOAD_CONTROL_DROP_PROC")

if (selectperiod=='60'):
	sqlstring="""
select
threeg.fins_ID,
objects.co_Name MMESGSN,
to_char(threeg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(threeg.period_start_time,'hh24') Stime,
decode(nvl((max(threeg.AVG_ATTACH_GB_USERS_DEN)),0),0,0,(round((sum(threeg.AVG_ATTACH_GB_USERS_SUM)/max(threeg.AVG_ATTACH_GB_USERS_DEN)/round(count(threeg.AVG_ATTACH_GB_USERS_DEN)/16,0)),0))) AttachUsers2g,
decode(nvl((max(threeg.AVG_ATTACH_IU_USERS_DEN)),0),0,0,(round((sum(threeg.AVG_ATTACH_IU_USERS_SUM)/max(threeg.AVG_ATTACH_GB_USERS_DEN)/round(count(threeg.AVG_ATTACH_GB_USERS_DEN)/16,0)),0))) AttachUsers3g,
decode(nvl((max(threeg.AVG_ATTACH_GB_USERS_DEN)),0),0,0,(round((sum(threeg.AVG_ATTACH_GB_USERS_SUM)/max(threeg.AVG_ATTACH_GB_USERS_DEN)/round(count(threeg.AVG_ATTACH_GB_USERS_DEN)/16,0)),0)))+decode(nvl((max(threeg.AVG_ATTACH_IU_USERS_DEN)),0),0,0,(round((sum(threeg.AVG_ATTACH_IU_USERS_SUM)/max(threeg.AVG_ATTACH_GB_USERS_DEN)/round(count(threeg.AVG_ATTACH_GB_USERS_DEN)/16,0)),0))) AttachUsers23g,
round(sum(PEAK_ATTACH_USERS_GB_IU)/round(count(threeg.AVG_ATTACH_GB_USERS_DEN)/16,0),0) peakuser23g,
round(round(max(PEAK_ATTACH_USERS_GB_IU),0)*100/2000000,2) peakpercent,
decode(nvl((sum(EPS_ECM_IDLE_DENOM)),0),0,0,(round((sum(EPS_ECM_IDLE_SUM)/(sum(EPS_ECM_IDLE_DENOM))),0))) NbrSub_EcmIdle,
decode(nvl((sum(EPS_ECM_CONN_DENOM)),0),0,0,(round((sum(EPS_ECM_CONN_SUM)/(sum(EPS_ECM_CONN_DENOM))),0))) NbrSub_EcmConnected,
decode(nvl((sum(EPS_ECM_IDLE_DENOM)),0),0,0,(round((sum(EPS_ECM_IDLE_SUM)/(sum(EPS_ECM_IDLE_DENOM))),0)))+decode(nvl((sum(EPS_ECM_CONN_DENOM)),0),0,0,(round((sum(EPS_ECM_CONN_SUM)/(sum(EPS_ECM_CONN_DENOM))),0))) NbrSub_4g,
sum(OVERLOAD_CONTROL_DROP_PROC) dropproc
from 	PCOFNS_PS_PAUS_PAPU_RAW threeg,  
		  PCOFNS_PS_UMLM_FLEXINS_RAW fourg,
			UTP_COMMON_OBJECTS objects
where 
threeg.fins_ID=objects.co_gid and fourg.fins_ID=objects.co_gid
and threeg.period_start_time=fourg.period_start_time
"""
else:
	sqlstring="""
select
threeg.fins_ID,
objects.co_Name MMESGSN,
to_char(threeg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(threeg.period_start_time,'hh24:mi') Stime,
decode(nvl((sum(threeg.AVG_ATTACH_GB_USERS_DEN)),0),0,0,(round((sum(threeg.AVG_ATTACH_GB_USERS_SUM)/max(threeg.AVG_ATTACH_GB_USERS_DEN)),0))) AttachUsers2g,
decode(nvl((sum(threeg.AVG_ATTACH_IU_USERS_DEN)),0),0,0,(round((sum(threeg.AVG_ATTACH_IU_USERS_SUM)/max(threeg.AVG_ATTACH_IU_USERS_DEN)),0))) AttachUsers3g,
decode(nvl((sum(threeg.AVG_ATTACH_GB_USERS_DEN)),0),0,0,(round((sum(threeg.AVG_ATTACH_GB_USERS_SUM)/max(threeg.AVG_ATTACH_GB_USERS_DEN)),0)))+decode(nvl((sum(threeg.AVG_ATTACH_IU_USERS_DEN)),0),0,0,(round((sum(threeg.AVG_ATTACH_IU_USERS_SUM)/max(threeg.AVG_ATTACH_IU_USERS_DEN)),0))) AttachUsers23g,
round(sum(PEAK_ATTACH_USERS_GB_IU),0) peakuser23g,
round(round(sum(PEAK_ATTACH_USERS_GB_IU)/1,0)*100/2000000,2) peakpercent,
decode(nvl((sum(EPS_ECM_IDLE_DENOM)),0),0,0,(round((sum(EPS_ECM_IDLE_SUM)/(sum(EPS_ECM_IDLE_DENOM))),0))) NbrSub_EcmIdle,
decode(nvl((sum(EPS_ECM_CONN_DENOM)),0),0,0,(round((sum(EPS_ECM_CONN_SUM)/(sum(EPS_ECM_CONN_DENOM))),0))) NbrSub_EcmConnected,
decode(nvl((sum(EPS_ECM_IDLE_DENOM)),0),0,0,(round((sum(EPS_ECM_IDLE_SUM)/(sum(EPS_ECM_IDLE_DENOM))),0)))+decode(nvl((sum(EPS_ECM_CONN_DENOM)),0),0,0,(round((sum(EPS_ECM_CONN_SUM)/(sum(EPS_ECM_CONN_DENOM))),0))) NbrSub_4g,
sum(OVERLOAD_CONTROL_DROP_PROC) dropproc
from 	PCOFNS_PS_PAUS_PAPU_RAW threeg,  
		  PCOFNS_PS_UMLM_FLEXINS_RAW fourg,
			UTP_COMMON_OBJECTS objects
where 
threeg.fins_ID=objects.co_gid and fourg.fins_ID=objects.co_gid
and threeg.period_start_time=fourg.period_start_time
"""

#round(sum(threeg.AVG_ATTACH_GB_USERS_SUM/threeg.AVG_ATTACH_GB_USERS_DEN))/4,0) AttachUsers2g,
#round((sum(threeg.AVG_ATTACH_IU_USERS_SUM/threeg.AVG_ATTACH_IU_USERS_DEN))/4,0) AttachUsers3g,
#round((sum(threeg.AVG_ATTACH_GB_USERS_SUM/threeg.AVG_ATTACH_GB_USERS_DEN))/4,0)+round((sum(threeg.AVG_ATTACH_IU_USERS_SUM/threeg.AVG_ATTACH_IU_USERS_DEN))/4,0) AttachUserAll,
#PEAK_ATTACH_USERS_GB_IU peakuser23g,
#decode(nvl((sum(EPS_ECM_IDLE_DENOM)),0),0,0,(round((sum(EPS_ECM_IDLE_SUM)/(sum(EPS_ECM_IDLE_DENOM))),0))) NbrSub_EcmIdle,
#decode(nvl((sum(EPS_ECM_CONN_DENOM)),0),0,0,(round((sum(EPS_ECM_CONN_SUM)/(sum(EPS_ECM_CONN_DENOM))),0))) NbrSub_EcmConnected


if (selectmmesgsn<>'all'):
	sqlstring=sqlstring+" and objects.co_name= \'"+selectmmesgsn+"\' " 

sqlstringtime=" and to_char(threeg.period_start_time,\'yyyy/mm/dd/hh24\')>=\'"+startdate+"/"+starttime+"\' and to_char(threeg.period_start_time,\'yyyy/mm/dd/hh24\')<=\'"+stopdate+"/"+stoptime + "\' "

if (selectperiod=='60'):
	sqlstring1=""" 
	group by to_char(threeg.period_start_time,'yyyy/mm/dd'), to_char(threeg.period_start_time,'hh24'), threeg.fins_id, objects.co_name 
	order by objects.co_name,to_char(threeg.period_start_time,'yyyy/mm/dd'),to_char(threeg.period_start_time,'hh24')
	"""
else:
	sqlstring1="""
	group by to_char(threeg.period_start_time,'yyyy/mm/dd'),to_char(threeg.period_start_time,'hh24:mi'), threeg.fins_ID, objects.co_name 
	order by objects.CO_name,to_char(threeg.period_start_time,'yyyy/mm/dd'),to_char(threeg.period_start_time,'hh24:mi')
	"""
sqlstring=sqlstring+sqlstringtime+sqlstring1
#print sqlstring

cursor.execute(sqlstring)

row9=cursor.fetchall()
for x in row9:
	if (localsave==0):
		print "<Item>"
	elif localsave==1:
		reportfile.write("\n")
	for y in x:
		if (localsave==0):
			print "<ItemCol>"
			print "<value>"
			print y
			print "</value>"
			print "</ItemCol>"
		elif localsave==1:
			reportfile.write(str(y))
			reportfile.write(',')
	if (localsave==0):
		print "</Item>"
	
	
if (localsave==0):
	print "</location>"
elif localsave==1:
	reportfile.write("\n")

# ͳ�ƻ��� 2/3G

if (localsave==0):
	print "<location>"
	print "<locationid>10</locationid>"
	print "<passed>true</passed>"
	print "<message>�ۺ�ͳ�� 2/3G</message>"
	print "<Title>"
	print "<name>�豸ID</name>"
	print "<name>�豸����</name>"
	print "<name>����</name>"
	print "<name>ʱ��</name>"
	print "<name>2,3G�����û���</name>"
	print "<name>PDP������</name>"
	print "<name>PDP����</name>"
	print "<name>С����</name>"
	print "<name>4G�����û���</name>"
	print "<name>4G ENB��</name>"
	print "<name>���ųɹ���2G</name>"
	print "<name>PDP�ɹ���2G</name>"
	print "<name>RAU�ɹ���2G</name>"
	print "<name>Paging�ɹ���2G</name>"
	print "<name>���ųɹ���3G</name>"
	print "<name>PDP�ɹ���3G</name>"
	print "<name>RAU�ɹ���3G</name>"
	print "<name>Paging�ɹ���3G</name>"
	print "</Title>"
elif (localsave==1):
	reportfile.write("�ۺ�ͳ�� 2/3G")
	reportfile.write("\n")
	reportfile.write("�豸ID,")
	reportfile.write("�豸����,")
	reportfile.write("����,")
	reportfile.write("ʱ��,")
	reportfile.write("2,3G�����û���,")
	reportfile.write("PDP������,")
	reportfile.write("PDP����,")
	reportfile.write("С����,")
	reportfile.write("4G�����û���,")
	reportfile.write("4G ENB��,")
	reportfile.write("���ųɹ���2G,")
	reportfile.write("PDP�ɹ���2G,")
	reportfile.write("RAU�ɹ���2G,")
	reportfile.write("Paging�ɹ���2G,")
	reportfile.write("���ųɹ���3G,")
	reportfile.write("PDP�ɹ���3G,")
	reportfile.write("RAU�ɹ���3G,")
	reportfile.write("Paging�ɹ���3G")

rowno=0
for x in row1:
	rowno=rowno+1
	if (localsave==0):
		print "<Item>"
	elif(localsave==1):
		reportfile.write("\n")
	i=0
	keystr=''
	for y in x:
		i=i+1
		if(i<=4 or i==9):
			if (localsave==0):
				print "<ItemCol>"
				print "<value>"
				print y
				print "</value>"
				print "</ItemCol>"
			elif(localsave==1):
				reportfile.write(str(y))
				reportfile.write(",")
			if(i<=4):
				keystr=keystr+str(y)
			if(i==2):
				itemname=str(y)
			if(i==3):
				itemdate=str(y)
			if(i==4):
				itemtime=str(y)
				#print 'sgsnfilename='+itemname
				opensgsnfile(itemname,itemdate,itemtime)
				if(localsave==0):
					printsgsn(itemname,itemdate,itemtime)	
				elif(localsave==1):
					localsavesgsn(itemname,itemdate,itemtime)
	printall(keystr,row2)
	#print keystr
	printall(keystr,row3)
	printall(keystr,row4)
	printall(keystr,row5)
	printall(keystr,row6)
	printall(keystr,row7)
	printall(keystr,row8)
	#printall(keystr,row9)
	
	if (localsave==0):
		print "</Item>"
if (localsave==0):
	print "</location>"
elif (localsave==1):
	reportfile.write("\n");


# Attach 4G & Service Request & MME S1/X2 inter/intra

if (localsave==0):
	print "<location>"
	print "<locationid>11</locationid>"
	print "<passed>true</passed>"
	print "<message>LTE�ƶ����� ͳ��</message>"
	print "<Title>"
	print "<name>�豸����</name>"
	print "<name>����</name>"
	print "<name>ʱ��</name>"
	print "<name>TAC</name>"
	print "<name>���Ŵ���4G</name>"
	print "<name>���ųɹ�����</name>"
	print "<name>����ʧ�ܴ���</name>"
	print "<name>����ʧ����ЧUE</name>"
	print "<name>����ʧ����ЧME</name>"
	print "<name>����ʧ��EPS Service not allow</name>"
	print "<name>����ʧ��Service not allowed</name>"
	print "<name>���ųɹ���4G</name>"
	print "<name>ȥ���Ŵ���</name>"
	print "<name>��������ɹ�����</name>"
	print "<name>��������ʧ�ܴ���</name>"
	print "<name>��������ɹ���</name>"
	print "<name>IntraMME X2�ɹ�����</name>"
	print "<name>IntraMME X2����</name>"
	print "<name>IntraMME InterENB X2�л��ɹ���</name>"
	print "<name>IntraMME S1�ɹ�����</name>"
	print "<name>IntraMME S1����</name>"
	print "<name>IntraMME InterENB S1�л��ɹ���</name>"
	print "<name>OutMME s1�л��ɹ���</name>"
	print "<name>OutMME s1�л��ɹ�����</name>"
	print "<name>OutMME s1�л�ʧ�ܴ���</name>"
	print "<name>In MME�л��ɹ���</name>"
	print "<name>InMME s1�л�SGW����ɹ�����</name>"
	print "<name>InMME s1�л�ʧ�ܴ���</name>"
	print "</Title>"
elif localsave==1:
	reportfile.write("LTE�ƶ����� ͳ��")
	reportfile.write("\n")
	reportfile.write("�豸����,")
	reportfile.write("����,")
	reportfile.write("ʱ��,")
	reportfile.write("TAC,")
	reportfile.write("���Ŵ���4G,")
	reportfile.write("���ųɹ�����,")
	reportfile.write("����ʧ�ܴ���,")
	reportfile.write("����ʧ����ЧUE,")
	reportfile.write("����ʧ����ЧME,")
	reportfile.write("����ʧ��EPS Service not allow,")
	reportfile.write("����ʧ��Service not allowed,")
	reportfile.write("���ųɹ���4G,")
	reportfile.write("ȥ���Ŵ���,")
	reportfile.write("��������ɹ�����,")
	reportfile.write("��������ʧ�ܴ���,")
	reportfile.write("��������ɹ���,")
	reportfile.write("IntraMME X2�ɹ�����,")
	reportfile.write("IntraMME X2����,")
	reportfile.write("IntraMME InterENB X2�л��ɹ���,")
	reportfile.write("IntraMME S1�ɹ�����,")
	reportfile.write("IntraMME S1����,")
	reportfile.write("IntraMME InterENB S1�л��ɹ���,")
	reportfile.write("OutMME s1�л��ɹ���")
	reportfile.write("OutMME s1�л��ɹ�����")
	reportfile.write("OutMME s1�л�ʧ�ܴ���")
	reportfile.write("In MME�л��ɹ���")
	reportfile.write("InMME s1�л�SGW����ɹ�����")
	reportfile.write("InMME s1�л�ʧ�ܴ���")

if (selectperiod=='60'):
	if (selectelement=='MMESGSN'):
		sqlstring="""
select
objects.CO_NAME,
to_char(fourg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(fourg.period_start_time,'hh24') Stime,
'ALL' elementtype,
sum(EPS_ATTACH_SUCC+EPS_ATTACH_FAIL-EPS_ATTACH_NAS_03_FAIL-EPS_ATTACH_NAS_06_FAIL-EPS_ATTACH_NAS_07_FAIL-EPS_ATTACH_NAS_08_FAIL) allattach,
sum(EPS_ATTACH_SUCC) succ,
sum(EPS_ATTACH_FAIL) FailedEpsAttach,
sum(EPS_ATTACH_NAS_03_FAIL) EPS_ATTACH_NAS_03_FAIL,
sum(EPS_ATTACH_NAS_06_FAIL) EPS_ATTACH_NAS_06_FAIL,
sum(EPS_ATTACH_NAS_07_FAIL)  EPS_ATTACH_NAS_07_FAIL,
sum(EPS_ATTACH_NAS_08_FAIL) EPS_ATTACH_NAS_08_FAIL,
decode(nvl((sum(EPS_ATTACH_SUCC+EPS_ATTACH_FAIL-EPS_ATTACH_NAS_03_FAIL-EPS_ATTACH_NAS_06_FAIL-EPS_ATTACH_NAS_07_FAIL-EPS_ATTACH_NAS_08_FAIL)),0),0,0,(round((sum(EPS_ATTACH_SUCC)/(sum(EPS_ATTACH_SUCC+EPS_ATTACH_FAIL-EPS_ATTACH_NAS_03_FAIL-EPS_ATTACH_NAS_06_FAIL-EPS_ATTACH_NAS_07_FAIL-EPS_ATTACH_NAS_08_FAIL))),4)*100)) EPSAttach_SR,
sum(EPS_DETACH) EPS_DETACH,
sum(EPS_SERVICE_REQUEST_SUCC) SRSUCC,
sum(EPS_SERVICE_REQUEST_FAIL) SRFAIL,
decode(nvl((sum(EPS_SERVICE_REQUEST_SUCC+EPS_SERVICE_REQUEST_FAIL)),0),0,0,(round((sum(EPS_SERVICE_REQUEST_SUCC)/(sum(EPS_SERVICE_REQUEST_SUCC+EPS_SERVICE_REQUEST_FAIL))),4)*100)) SER_REQ_SR,
sum(EPS_PATH_SWITCH_X2_SUCC) intrammex2succ,
sum(EPS_PATH_SWITCH_X2_SUCC+EPS_PATH_SWITCH_X2_FAIL) intrammex2att,
decode(nvl((sum(EPS_PATH_SWITCH_X2_SUCC+EPS_PATH_SWITCH_X2_FAIL)),0),0,100,(round((sum(EPS_PATH_SWITCH_X2_SUCC)/(sum(EPS_PATH_SWITCH_X2_SUCC+EPS_PATH_SWITCH_X2_FAIL))),4)*100)) IntraMme_InterEnbX2_SR,
sum(EPS_S1HO_SUCC) intrammes1succ,
sum(EPS_S1HO_SUCC+EPS_S1HO_FAIL) intrammes1att,
decode(nvl((sum(EPS_S1HO_SUCC+EPS_S1HO_FAIL)),0),0,100,(round((sum(EPS_S1HO_SUCC)/(sum(EPS_S1HO_SUCC+EPS_S1HO_FAIL))),4)*100)) IntraMme_InterEnbS1_SR,
decode(nvl((sum(INTERMME_S1HO_OUT_SUCC+INTERMME_S1HO_OUT_FAIL)),0),0,0,(round((sum(INTERMME_S1HO_OUT_SUCC)/(sum(INTERMME_S1HO_OUT_SUCC+INTERMME_S1HO_OUT_FAIL))),4)*100)) Out_InterMme_Ho_SR,
sum(INTERMME_S1HO_OUT_SUCC) INTERMME_S1HO_OUT_SUCC,
sum(INTERMME_S1HO_OUT_FAIL) INTERMME_S1HO_OUT_FAIL,
decode(nvl((sum(INTERMME_S1HO_WO_SGW_CHG_SUCC+INTERMME_S1HO_IN_FAIL)),0),0,0,(round((sum(INTERMME_S1HO_WO_SGW_CHG_SUCC)/(sum(INTERMME_S1HO_WO_SGW_CHG_SUCC+INTERMME_S1HO_IN_FAIL))),4)*100)) Inc_InterMme_HO_SR,
sum(INTERMME_S1HO_WO_SGW_CHG_SUCC) INTERMME_S1HO_WO_SGW_CHG_SUCC,
sum(INTERMME_S1HO_IN_FAIL) INTERMME_S1HO_IN_FAIL
from 	PCOFNS_PS_MMMT_TA_RAW fourg,
			UTP_COMMON_OBJECTS objects
where 
fourg.FINS_ID=objects.CO_GID
"""
	else:
		sqlstring="""
select
objects.CO_NAME,
to_char(fourg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(fourg.period_start_time,'hh24') Stime,
ta_id elementtype,
sum(EPS_ATTACH_SUCC+EPS_ATTACH_FAIL-EPS_ATTACH_NAS_03_FAIL-EPS_ATTACH_NAS_06_FAIL-EPS_ATTACH_NAS_07_FAIL-EPS_ATTACH_NAS_08_FAIL) allattach,
sum(EPS_ATTACH_SUCC) succ,
sum(EPS_ATTACH_FAIL) FailedEpsAttach,
sum(EPS_ATTACH_NAS_03_FAIL) EPS_ATTACH_NAS_03_FAIL,
sum(EPS_ATTACH_NAS_06_FAIL) EPS_ATTACH_NAS_06_FAIL,
sum(EPS_ATTACH_NAS_07_FAIL)  EPS_ATTACH_NAS_07_FAIL,
sum(EPS_ATTACH_NAS_08_FAIL) EPS_ATTACH_NAS_08_FAIL,
decode(nvl((sum(EPS_ATTACH_SUCC+EPS_ATTACH_FAIL-EPS_ATTACH_NAS_03_FAIL-EPS_ATTACH_NAS_06_FAIL-EPS_ATTACH_NAS_07_FAIL-EPS_ATTACH_NAS_08_FAIL)),0),0,0,(round((sum(EPS_ATTACH_SUCC)/(sum(EPS_ATTACH_SUCC+EPS_ATTACH_FAIL-EPS_ATTACH_NAS_03_FAIL-EPS_ATTACH_NAS_06_FAIL-EPS_ATTACH_NAS_07_FAIL-EPS_ATTACH_NAS_08_FAIL))),4)*100)) EPSAttach_SR,
sum(EPS_DETACH) EPS_DETACH,
sum(EPS_SERVICE_REQUEST_SUCC) SRSUCC,
sum(EPS_SERVICE_REQUEST_FAIL) SRFAIL,
decode(nvl((sum(EPS_SERVICE_REQUEST_SUCC+EPS_SERVICE_REQUEST_FAIL)),0),0,0,(round((sum(EPS_SERVICE_REQUEST_SUCC)/(sum(EPS_SERVICE_REQUEST_SUCC+EPS_SERVICE_REQUEST_FAIL))),4)*100)) SER_REQ_SR,
sum(EPS_PATH_SWITCH_X2_SUCC) intrammex2succ,
sum(EPS_PATH_SWITCH_X2_SUCC+EPS_PATH_SWITCH_X2_FAIL) intrammex2att,
decode(nvl((sum(EPS_PATH_SWITCH_X2_SUCC+EPS_PATH_SWITCH_X2_FAIL)),0),0,100,(round((sum(EPS_PATH_SWITCH_X2_SUCC)/(sum(EPS_PATH_SWITCH_X2_SUCC+EPS_PATH_SWITCH_X2_FAIL))),4)*100)) IntraMme_InterEnbX2_SR,
sum(EPS_S1HO_SUCC) intrammes1succ,
sum(EPS_S1HO_SUCC+EPS_S1HO_FAIL) intrammes1att,
decode(nvl((sum(EPS_S1HO_SUCC+EPS_S1HO_FAIL)),0),0,100,(round((sum(EPS_S1HO_SUCC)/(sum(EPS_S1HO_SUCC+EPS_S1HO_FAIL))),4)*100)) IntraMme_InterEnbS1_SR,
decode(nvl((sum(INTERMME_S1HO_OUT_SUCC+INTERMME_S1HO_OUT_FAIL)),0),0,0,(round((sum(INTERMME_S1HO_OUT_SUCC)/(sum(INTERMME_S1HO_OUT_SUCC+INTERMME_S1HO_OUT_FAIL))),4)*100)) Out_InterMme_Ho_SR,
sum(INTERMME_S1HO_OUT_SUCC) INTERMME_S1HO_OUT_SUCC,
sum(INTERMME_S1HO_OUT_FAIL) INTERMME_S1HO_OUT_FAIL,
decode(nvl((sum(INTERMME_S1HO_WO_SGW_CHG_SUCC+INTERMME_S1HO_IN_FAIL)),0),0,0,(round((sum(INTERMME_S1HO_WO_SGW_CHG_SUCC)/(sum(INTERMME_S1HO_WO_SGW_CHG_SUCC+INTERMME_S1HO_IN_FAIL))),4)*100)) Inc_InterMme_HO_SR,
sum(INTERMME_S1HO_WO_SGW_CHG_SUCC) INTERMME_S1HO_WO_SGW_CHG_SUCC,
sum(INTERMME_S1HO_IN_FAIL) INTERMME_S1HO_IN_FAIL
from 	PCOFNS_PS_MMMT_TA_RAW fourg,
			UTP_COMMON_OBJECTS objects
where 
fourg.FINS_ID=objects.CO_GID and EPS_ATTACH_SUCC+EPS_ATTACH_FAIL>0
"""
else:
	if (selectelement=='MMESGSN'):	
		sqlstring="""
select
objects.CO_NAME,
to_char(fourg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(fourg.period_start_time,'hh24:mi') Stime,
'ALL' elementtype,
sum(EPS_ATTACH_SUCC+EPS_ATTACH_FAIL-EPS_ATTACH_NAS_03_FAIL-EPS_ATTACH_NAS_06_FAIL-EPS_ATTACH_NAS_07_FAIL-EPS_ATTACH_NAS_08_FAIL) allattach,
sum(EPS_ATTACH_SUCC) succ,
sum(EPS_ATTACH_FAIL) FailedEpsAttach,
sum(EPS_ATTACH_NAS_03_FAIL) EPS_ATTACH_NAS_03_FAIL,
sum(EPS_ATTACH_NAS_06_FAIL) EPS_ATTACH_NAS_06_FAIL,
sum(EPS_ATTACH_NAS_07_FAIL)  EPS_ATTACH_NAS_07_FAIL,
sum(EPS_ATTACH_NAS_08_FAIL) EPS_ATTACH_NAS_08_FAIL,
decode(nvl((sum(EPS_ATTACH_SUCC+EPS_ATTACH_FAIL-EPS_ATTACH_NAS_03_FAIL-EPS_ATTACH_NAS_06_FAIL-EPS_ATTACH_NAS_07_FAIL-EPS_ATTACH_NAS_08_FAIL)),0),0,0,(round((sum(EPS_ATTACH_SUCC)/(sum(EPS_ATTACH_SUCC+EPS_ATTACH_FAIL-EPS_ATTACH_NAS_03_FAIL-EPS_ATTACH_NAS_06_FAIL-EPS_ATTACH_NAS_07_FAIL-EPS_ATTACH_NAS_08_FAIL))),4)*100)) EPSAttach_SR,
sum(EPS_DETACH) EPS_DETACH,
sum(EPS_SERVICE_REQUEST_SUCC) SRSUCC,
sum(EPS_SERVICE_REQUEST_FAIL) SRFAIL,
decode(nvl((sum(EPS_SERVICE_REQUEST_SUCC+EPS_SERVICE_REQUEST_FAIL)),0),0,0,(round((sum(EPS_SERVICE_REQUEST_SUCC)/(sum(EPS_SERVICE_REQUEST_SUCC+EPS_SERVICE_REQUEST_FAIL))),4)*100)) SER_REQ_SR,
sum(EPS_PATH_SWITCH_X2_SUCC) intrammex2succ,
sum(EPS_PATH_SWITCH_X2_SUCC+EPS_PATH_SWITCH_X2_FAIL) intrammex2att,
decode(nvl((sum(EPS_PATH_SWITCH_X2_SUCC+EPS_PATH_SWITCH_X2_FAIL)),0),0,100,(round((sum(EPS_PATH_SWITCH_X2_SUCC)/(sum(EPS_PATH_SWITCH_X2_SUCC+EPS_PATH_SWITCH_X2_FAIL))),4)*100)) IntraMme_InterEnbX2_SR,
sum(EPS_S1HO_SUCC) intrammes1succ,
sum(EPS_S1HO_SUCC+EPS_S1HO_FAIL) intrammes1att,
decode(nvl((sum(EPS_S1HO_SUCC+EPS_S1HO_FAIL)),0),0,100,(round((sum(EPS_S1HO_SUCC)/(sum(EPS_S1HO_SUCC+EPS_S1HO_FAIL))),4)*100)) IntraMme_InterEnbS1_SR,
decode(nvl((sum(INTERMME_S1HO_OUT_SUCC+INTERMME_S1HO_OUT_FAIL)),0),0,0,(round((sum(INTERMME_S1HO_OUT_SUCC)/(sum(INTERMME_S1HO_OUT_SUCC+INTERMME_S1HO_OUT_FAIL))),4)*100)) Out_InterMme_Ho_SR,
sum(INTERMME_S1HO_OUT_SUCC) INTERMME_S1HO_OUT_SUCC,
sum(INTERMME_S1HO_OUT_FAIL) INTERMME_S1HO_OUT_FAIL,
decode(nvl((sum(INTERMME_S1HO_WO_SGW_CHG_SUCC+INTERMME_S1HO_IN_FAIL)),0),0,0,(round((sum(INTERMME_S1HO_WO_SGW_CHG_SUCC)/(sum(INTERMME_S1HO_WO_SGW_CHG_SUCC+INTERMME_S1HO_IN_FAIL))),4)*100)) Inc_InterMme_HO_SR,
sum(INTERMME_S1HO_WO_SGW_CHG_SUCC) INTERMME_S1HO_WO_SGW_CHG_SUCC,
sum(INTERMME_S1HO_IN_FAIL) INTERMME_S1HO_IN_FAIL
from 	PCOFNS_PS_MMMT_TA_RAW fourg,
			UTP_COMMON_OBJECTS objects
where 
fourg.FINS_ID=objects.CO_GID
"""
	else:
		sqlstring="""
select
objects.CO_NAME,
to_char(fourg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(fourg.period_start_time,'hh24:mi') Stime,
ta_id elementtype,
sum(EPS_ATTACH_SUCC+EPS_ATTACH_FAIL-EPS_ATTACH_NAS_03_FAIL-EPS_ATTACH_NAS_06_FAIL-EPS_ATTACH_NAS_07_FAIL-EPS_ATTACH_NAS_08_FAIL) allattach,
sum(EPS_ATTACH_SUCC) succ,
sum(EPS_ATTACH_FAIL) FailedEpsAttach,
sum(EPS_ATTACH_NAS_03_FAIL) EPS_ATTACH_NAS_03_FAIL,
sum(EPS_ATTACH_NAS_06_FAIL) EPS_ATTACH_NAS_06_FAIL,
sum(EPS_ATTACH_NAS_07_FAIL)  EPS_ATTACH_NAS_07_FAIL,
sum(EPS_ATTACH_NAS_08_FAIL) EPS_ATTACH_NAS_08_FAIL,
decode(nvl((sum(EPS_ATTACH_SUCC+EPS_ATTACH_FAIL-EPS_ATTACH_NAS_03_FAIL-EPS_ATTACH_NAS_06_FAIL-EPS_ATTACH_NAS_07_FAIL-EPS_ATTACH_NAS_08_FAIL)),0),0,0,(round((sum(EPS_ATTACH_SUCC)/(sum(EPS_ATTACH_SUCC+EPS_ATTACH_FAIL-EPS_ATTACH_NAS_03_FAIL-EPS_ATTACH_NAS_06_FAIL-EPS_ATTACH_NAS_07_FAIL-EPS_ATTACH_NAS_08_FAIL))),4)*100)) EPSAttach_SR,
sum(EPS_DETACH) EPS_DETACH,
sum(EPS_SERVICE_REQUEST_SUCC) SRSUCC,
sum(EPS_SERVICE_REQUEST_FAIL) SRFAIL,
decode(nvl((sum(EPS_SERVICE_REQUEST_SUCC+EPS_SERVICE_REQUEST_FAIL)),0),0,0,(round((sum(EPS_SERVICE_REQUEST_SUCC)/(sum(EPS_SERVICE_REQUEST_SUCC+EPS_SERVICE_REQUEST_FAIL))),4)*100)) SER_REQ_SR,
sum(EPS_PATH_SWITCH_X2_SUCC) intrammex2succ,
sum(EPS_PATH_SWITCH_X2_SUCC+EPS_PATH_SWITCH_X2_FAIL) intrammex2att,
decode(nvl((sum(EPS_PATH_SWITCH_X2_SUCC+EPS_PATH_SWITCH_X2_FAIL)),0),0,100,(round((sum(EPS_PATH_SWITCH_X2_SUCC)/(sum(EPS_PATH_SWITCH_X2_SUCC+EPS_PATH_SWITCH_X2_FAIL))),4)*100)) IntraMme_InterEnbX2_SR,
sum(EPS_S1HO_SUCC) intrammes1succ,
sum(EPS_S1HO_SUCC+EPS_S1HO_FAIL) intrammes1att,
decode(nvl((sum(EPS_S1HO_SUCC+EPS_S1HO_FAIL)),0),0,100,(round((sum(EPS_S1HO_SUCC)/(sum(EPS_S1HO_SUCC+EPS_S1HO_FAIL))),4)*100)) IntraMme_InterEnbS1_SR,
decode(nvl((sum(INTERMME_S1HO_OUT_SUCC+INTERMME_S1HO_OUT_FAIL)),0),0,0,(round((sum(INTERMME_S1HO_OUT_SUCC)/(sum(INTERMME_S1HO_OUT_SUCC+INTERMME_S1HO_OUT_FAIL))),4)*100)) Out_InterMme_Ho_SR,
sum(INTERMME_S1HO_OUT_SUCC) INTERMME_S1HO_OUT_SUCC,
sum(INTERMME_S1HO_OUT_FAIL) INTERMME_S1HO_OUT_FAIL,
decode(nvl((sum(INTERMME_S1HO_WO_SGW_CHG_SUCC+INTERMME_S1HO_IN_FAIL)),0),0,0,(round((sum(INTERMME_S1HO_WO_SGW_CHG_SUCC)/(sum(INTERMME_S1HO_WO_SGW_CHG_SUCC+INTERMME_S1HO_IN_FAIL))),4)*100)) Inc_InterMme_HO_SR,
sum(INTERMME_S1HO_WO_SGW_CHG_SUCC) INTERMME_S1HO_WO_SGW_CHG_SUCC,
sum(INTERMME_S1HO_IN_FAIL) INTERMME_S1HO_IN_FAIL
from 	PCOFNS_PS_MMMT_TA_RAW fourg,
			UTP_COMMON_OBJECTS objects
where 
fourg.FINS_ID=objects.CO_GID and EPS_ATTACH_SUCC+EPS_ATTACH_FAIL>0
"""

if (selectmmesgsn<>'all'):
	sqlstring=sqlstring+" and objects.co_name= \'"+selectmmesgsn+"\' " 

sqlstringtime=" and to_char(fourg.period_start_time,\'yyyy/mm/dd/hh24\')>=\'"+startdate+"/"+starttime+"\' and to_char(fourg.period_start_time,\'yyyy/mm/dd/hh24\')<=\'"+stopdate+"/"+stoptime + "\' "

if (selectperiod=='60'):
	if (selectelement=='MMESGSN'):
		sqlstring1=""" 
	group by to_char(fourg.period_start_time,'yyyy/mm/dd'), to_char(fourg.period_start_time,'hh24'), fourg.fins_id, objects.co_name 
	order by objects.co_name,to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24')
	"""
	else:
		sqlstring1=""" 
	group by to_char(fourg.period_start_time,'yyyy/mm/dd'), to_char(fourg.period_start_time,'hh24'), fourg.fins_id, objects.co_name,ta_id 
	order by objects.co_name,ta_id,to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24')
	"""
else:
	if (selectelement=='MMESGSN'):
		sqlstring1="""
	group by to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24:mi'), fourg.fins_ID, objects.co_name 
	order by objects.CO_name,to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24:mi')
	"""
	else:
		sqlstring1="""
	group by to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24:mi'), fourg.fins_ID, objects.co_name,ta_id 
	order by objects.CO_name,ta_id,to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24:mi')
	"""
		
sqlstring=sqlstring+sqlstringtime+sqlstring1
#print sqlstring
cursor.execute(sqlstring)

row10=cursor.fetchall()
for x in row10:
	
	if (localsave==0):
		print "<Item>"
	elif localsave==1:
		reportfile.write("\n")
	for y in x:
		if (localsave==0):
			print "<ItemCol>"
			print "<value>"
			print y
			print "</value>"
			print "</ItemCol>"
		elif localsave==1:
			reportfile.write(str(y))
			reportfile.write(',')
	if (localsave==0):
		print "</Item>"
	
	
if (localsave==0):
	print "</location>"
elif localsave==1:
	reportfile.write("\n")

# pdp 4G

if (localsave==0):
	print "<location>"
	print "<locationid>12</locationid>"
	print "<passed>true</passed>"
	print "<message>LTE�Ự���� ͳ��</message>"
	print "<Title>"
	print "<name>�豸����</name>"
	print "<name>����</name>"
	print "<name>ʱ��</name>"
	print "<name>TAC</name>"
	print "<name>ȱʡ���ؽ����ɹ���4G</name>"
	print "<name>����ȱʡ���ش���</name>"
	print "<name>����ȱʡ���سɹ�����</name>"
	print "<name>ȱʡ���ؽ�����MMEʧ��</name>"
	print "<name>�޸ĳ��ش���</name>"
	print "<name>�޸ĳ��سɹ�����</name>"
	print "<name>s5s8 SGW���ؽ����ɹ�����</name>"
	print "<name>s5s8 MME���ؽ����������</name>"
	print "<name>s5s8���ؽ����ɹ���</name>"
	print "<name>PDN���ӳɹ�����</name>"
	print "<name>PDN����ʧ�ܴ���</name>"
	print "<name>PDN����ʧ��UE����</name>"
	print "<name>PDN����ʧ��SGW����</name>"
	print "<name>PDN����ʧ��MME����</name>"
	print "<name>PDN����ʧ��ENB����</name>"
	print "<name>PDN����ʧ��Coll����</name>"
	print "<name>PDN����ʧ����������</name>"
	print "<name>PDN���ӳɹ���</name>"
	print "</Title>"
elif localsave==1:
	reportfile.write("LTE�Ự���� ͳ��")
	reportfile.write("\n")
	reportfile.write("�豸����,")
	reportfile.write("����,")
	reportfile.write("ʱ��,")
	reportfile.write("TAC,")
	reportfile.write("ȱʡ���ؽ����ɹ���4G,")
	reportfile.write("����ȱʡ���ش���,")
	reportfile.write("����ȱʡ���سɹ�����,")
	reportfile.write("ȱʡ���ؽ�����MMEʧ��,")
	reportfile.write("�޸ĳ��ش���,")
	reportfile.write("�޸ĳ��سɹ�����,")
	reportfile.write("s5s8 SGW���ؽ����ɹ�����,")
	reportfile.write("s5s8 MME���ؽ����������,")
	reportfile.write("s5s8���ؽ����ɹ���,")
	reportfile.write("PDN���ӳɹ�����,")
	reportfile.write("PDN����ʧ�ܴ���,")
	reportfile.write("PDN����ʧ��UE����,")
	reportfile.write("PDN����ʧ��SGW����,")
	reportfile.write("PDN����ʧ��MME����,")
	reportfile.write("PDN����ʧ��ENB����,")
	reportfile.write("PDN����ʧ��Coll����,")
	reportfile.write("PDN����ʧ����������,")
	reportfile.write("PDN���ӳɹ���")
#
#
if (selectperiod=='60'):
	if (selectelement=='MMESGSN'):
		sqlstring="""
select 
objects.CO_NAME,
to_char(fourg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(fourg.period_start_time,'hh24') Stime,
'ALL' elementtype,
decode(nvl((sum(EPS_DEF_BEARER_ACT_SUCC+EPS_DEF_BEARER_ACT_FAIL)),0),0,0,(round((sum(EPS_DEF_BEARER_ACT_SUCC)/(sum(EPS_DEF_BEARER_ACT_SUCC+EPS_DEF_BEARER_ACT_FAIL))),4)*100)) ActDefault_EPS_Bearer_SR,
sum(EPS_DEF_BEARER_ACT_SUCC+EPS_DEF_BEARER_ACT_FAIL) ActDefaultEpsBearerRequest,
sum(EPS_DEF_BEARER_ACT_SUCC) ActDefaultEpsBearerAccept,
sum(EPS_DEF_BEARER_ACT_MME_FAIL) EPS_DEF_BEARER_ACT_MME_FAIL,
sum(GW_INIT_BEARER_MOD_SUCCESS+GW_INIT_BEARER_MOD_FAILURE+HSS_INIT_BEARER_MOD_SUCCESS+HSS_INIT_BEARER_MOD_FAILURE) ModEpsBearerRequest,
sum(GW_INIT_BEARER_MOD_SUCCESS+HSS_INIT_BEARER_MOD_SUCCESS) ModEpsBearerAccept,
sum(EPS_DFBEARER_S5_S8_CONF_BY_SGW) s5s8succ,
sum(EPS_DFBEARER_S5_S8_REQ_BY_MME) s5s8att,
decode(nvl(sum(EPS_DFBEARER_S5_S8_REQ_BY_MME),0),0,0,round(sum(EPS_DFBEARER_S5_S8_CONF_BY_SGW)/sum(EPS_DFBEARER_S5_S8_REQ_BY_MME)*100,2)) s5s8_succ_rate,
sum(PDN_CONNECTIVITY_SUCCESSFUL) PdnSucc,
sum(PDN_CONNECTIVITY_FAILED) PdnFail,
sum(PDN_CONNECTIVITY_FAILED_UE) PdnFailUE,
sum(PDN_CONNECTIVITY_FAILED_SGW) PdnFailSGW,
sum(PDN_CONNECTIVITY_FAILED_MME) PdnFailMME,
sum(PDN_CONNECTIVITY_FAILED_ENB) PdnFailENB,
sum(PDN_CONNECT_FAILED_COLLISION) PdnFailColl,
sum(PDN_CONNECT_FAILED_UNSPECIFIED) PdnFailUnspec,
decode(nvl((sum(PDN_CONNECTIVITY_SUCCESSFUL+PDN_CONNECTIVITY_FAILED)),0),0,0,(round((sum(PDN_CONNECTIVITY_SUCCESSFUL)/sum(PDN_CONNECTIVITY_SUCCESSFUL+PDN_CONNECTIVITY_FAILED)),4)*100)) PDN_CONN_SR
from 	PCOFNS_PS_SMMT_TA_RAW fourg,
			UTP_COMMON_OBJECTS objects
where 
fourg.FINS_ID=objects.CO_GID
"""
	else:
		sqlstring="""
select 
objects.CO_NAME,
to_char(fourg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(fourg.period_start_time,'hh24') Stime,
ta_id elementtype,
decode(nvl((sum(EPS_DEF_BEARER_ACT_SUCC+EPS_DEF_BEARER_ACT_FAIL)),0),0,0,(round((sum(EPS_DEF_BEARER_ACT_SUCC)/(sum(EPS_DEF_BEARER_ACT_SUCC+EPS_DEF_BEARER_ACT_FAIL))),4)*100)) ActDefault_EPS_Bearer_SR,
sum(EPS_DEF_BEARER_ACT_SUCC+EPS_DEF_BEARER_ACT_FAIL) ActDefaultEpsBearerRequest,
sum(EPS_DEF_BEARER_ACT_SUCC) ActDefaultEpsBearerAccept,
sum(EPS_DEF_BEARER_ACT_MME_FAIL) EPS_DEF_BEARER_ACT_MME_FAIL,
sum(GW_INIT_BEARER_MOD_SUCCESS+GW_INIT_BEARER_MOD_FAILURE+HSS_INIT_BEARER_MOD_SUCCESS+HSS_INIT_BEARER_MOD_FAILURE) ModEpsBearerRequest,
sum(GW_INIT_BEARER_MOD_SUCCESS+HSS_INIT_BEARER_MOD_SUCCESS) ModEpsBearerAccept,
sum(EPS_DFBEARER_S5_S8_CONF_BY_SGW) s5s8succ,
sum(EPS_DFBEARER_S5_S8_REQ_BY_MME) s5s8att,
decode(nvl(sum(EPS_DFBEARER_S5_S8_REQ_BY_MME),0),0,0,round(sum(EPS_DFBEARER_S5_S8_CONF_BY_SGW)/sum(EPS_DFBEARER_S5_S8_REQ_BY_MME)*100,2)) s5s8_succ_rate,
sum(PDN_CONNECTIVITY_SUCCESSFUL) PdnSucc,
sum(PDN_CONNECTIVITY_FAILED) PdnFail,
sum(PDN_CONNECTIVITY_FAILED_UE) PdnFailUE,
sum(PDN_CONNECTIVITY_FAILED_SGW) PdnFailSGW,
sum(PDN_CONNECTIVITY_FAILED_MME) PdnFailMME,
sum(PDN_CONNECTIVITY_FAILED_ENB) PdnFailENB,
sum(PDN_CONNECT_FAILED_COLLISION) PdnFailColl,
sum(PDN_CONNECT_FAILED_UNSPECIFIED) PdnFailUnspec,
decode(nvl((sum(PDN_CONNECTIVITY_SUCCESSFUL+PDN_CONNECTIVITY_FAILED)),0),0,0,(round((sum(PDN_CONNECTIVITY_SUCCESSFUL)/sum(PDN_CONNECTIVITY_SUCCESSFUL+PDN_CONNECTIVITY_FAILED)),4)*100)) PDN_CONN_SR
from 	PCOFNS_PS_SMMT_TA_RAW fourg,
			UTP_COMMON_OBJECTS objects
where 
fourg.FINS_ID=objects.CO_GID and EPS_DEF_BEARER_ACT_SUCC+EPS_DEF_BEARER_ACT_FAIL>0
"""
else:
	if (selectelement=='MMESGSN'):
		sqlstring="""
select
objects.CO_NAME,
to_char(fourg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(fourg.period_start_time,'hh24:mi') Stime,
'ALL' elementtype,
decode(nvl((sum(EPS_DEF_BEARER_ACT_SUCC+EPS_DEF_BEARER_ACT_FAIL)),0),0,0,(round((sum(EPS_DEF_BEARER_ACT_SUCC)/(sum(EPS_DEF_BEARER_ACT_SUCC+EPS_DEF_BEARER_ACT_FAIL))),4)*100)) ActDefault_EPS_Bearer_SR,
sum(EPS_DEF_BEARER_ACT_SUCC+EPS_DEF_BEARER_ACT_FAIL) ActDefaultEpsBearerRequest,
sum(EPS_DEF_BEARER_ACT_SUCC) ActDefaultEpsBearerAccept,
sum(EPS_DEF_BEARER_ACT_MME_FAIL) EPS_DEF_BEARER_ACT_MME_FAIL,
sum(GW_INIT_BEARER_MOD_SUCCESS+GW_INIT_BEARER_MOD_FAILURE+HSS_INIT_BEARER_MOD_SUCCESS+HSS_INIT_BEARER_MOD_FAILURE) ModEpsBearerRequest,
sum(GW_INIT_BEARER_MOD_SUCCESS+HSS_INIT_BEARER_MOD_SUCCESS) ModEpsBearerAccept,
sum(EPS_DFBEARER_S5_S8_CONF_BY_SGW) s5s8succ,
sum(EPS_DFBEARER_S5_S8_REQ_BY_MME) s5s8att,
decode(nvl(sum(EPS_DFBEARER_S5_S8_REQ_BY_MME),0),0,0,round(sum(EPS_DFBEARER_S5_S8_CONF_BY_SGW)/sum(EPS_DFBEARER_S5_S8_REQ_BY_MME)*100,2)) s5s8_succ_rate,
sum(PDN_CONNECTIVITY_SUCCESSFUL) PdnSucc,
sum(PDN_CONNECTIVITY_FAILED) PdnFail,
sum(PDN_CONNECTIVITY_FAILED_UE) PdnFailUE,
sum(PDN_CONNECTIVITY_FAILED_SGW) PdnFailSGW,
sum(PDN_CONNECTIVITY_FAILED_MME) PdnFailMME,
sum(PDN_CONNECTIVITY_FAILED_ENB) PdnFailENB,
sum(PDN_CONNECT_FAILED_COLLISION) PdnFailColl,
sum(PDN_CONNECT_FAILED_UNSPECIFIED) PdnFailUnspec,
decode(nvl((sum(PDN_CONNECTIVITY_SUCCESSFUL+PDN_CONNECTIVITY_FAILED)),0),0,0,(round((sum(PDN_CONNECTIVITY_SUCCESSFUL)/sum(PDN_CONNECTIVITY_SUCCESSFUL+PDN_CONNECTIVITY_FAILED)),4)*100)) PDN_CONN_SR
from 	PCOFNS_PS_SMMT_TA_RAW fourg,
			UTP_COMMON_OBJECTS objects
where 
fourg.FINS_ID=objects.CO_GID
"""
	else:
		sqlstring="""
select 
objects.CO_NAME,
to_char(fourg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(fourg.period_start_time,'hh24:mi') Stime,
ta_id elementtype,
decode(nvl((sum(EPS_DEF_BEARER_ACT_SUCC+EPS_DEF_BEARER_ACT_FAIL)),0),0,0,(round((sum(EPS_DEF_BEARER_ACT_SUCC)/(sum(EPS_DEF_BEARER_ACT_SUCC+EPS_DEF_BEARER_ACT_FAIL))),4)*100)) ActDefault_EPS_Bearer_SR,
sum(EPS_DEF_BEARER_ACT_SUCC+EPS_DEF_BEARER_ACT_FAIL) ActDefaultEpsBearerRequest,
sum(EPS_DEF_BEARER_ACT_SUCC) ActDefaultEpsBearerAccept,
sum(EPS_DEF_BEARER_ACT_MME_FAIL) EPS_DEF_BEARER_ACT_MME_FAIL,
sum(GW_INIT_BEARER_MOD_SUCCESS+GW_INIT_BEARER_MOD_FAILURE+HSS_INIT_BEARER_MOD_SUCCESS+HSS_INIT_BEARER_MOD_FAILURE) ModEpsBearerRequest,
sum(GW_INIT_BEARER_MOD_SUCCESS+HSS_INIT_BEARER_MOD_SUCCESS) ModEpsBearerAccept,
sum(EPS_DFBEARER_S5_S8_CONF_BY_SGW) s5s8succ,
sum(EPS_DFBEARER_S5_S8_REQ_BY_MME) s5s8att,
decode(nvl(sum(EPS_DFBEARER_S5_S8_REQ_BY_MME),0),0,0,round(sum(EPS_DFBEARER_S5_S8_CONF_BY_SGW)/sum(EPS_DFBEARER_S5_S8_REQ_BY_MME)*100,2)) s5s8_succ_rate,
sum(PDN_CONNECTIVITY_SUCCESSFUL) PdnSucc,
sum(PDN_CONNECTIVITY_FAILED) PdnFail,
sum(PDN_CONNECTIVITY_FAILED_UE) PdnFailUE,
sum(PDN_CONNECTIVITY_FAILED_SGW) PdnFailSGW,
sum(PDN_CONNECTIVITY_FAILED_MME) PdnFailMME,
sum(PDN_CONNECTIVITY_FAILED_ENB) PdnFailENB,
sum(PDN_CONNECT_FAILED_COLLISION) PdnFailColl,
sum(PDN_CONNECT_FAILED_UNSPECIFIED) PdnFailUnspec,
decode(nvl((sum(PDN_CONNECTIVITY_SUCCESSFUL+PDN_CONNECTIVITY_FAILED)),0),0,0,(round((sum(PDN_CONNECTIVITY_SUCCESSFUL)/sum(PDN_CONNECTIVITY_SUCCESSFUL+PDN_CONNECTIVITY_FAILED)),4)*100)) PDN_CONN_SR
from 	PCOFNS_PS_SMMT_TA_RAW fourg,
			UTP_COMMON_OBJECTS objects
where 
fourg.FINS_ID=objects.CO_GID and EPS_DEF_BEARER_ACT_SUCC+EPS_DEF_BEARER_ACT_FAIL>0
"""

if (selectmmesgsn<>'all'):
	sqlstring=sqlstring+" and objects.co_name= \'"+selectmmesgsn+"\' " 

sqlstringtime=" and to_char(fourg.period_start_time,\'yyyy/mm/dd/hh24\')>=\'"+startdate+"/"+starttime+"\' and to_char(fourg.period_start_time,\'yyyy/mm/dd/hh24\')<=\'"+stopdate+"/"+stoptime + "\' "

if (selectperiod=='60'):
	if (selectelement=='MMESGSN'):
		sqlstring1=""" 
	group by to_char(fourg.period_start_time,'yyyy/mm/dd'), to_char(fourg.period_start_time,'hh24'), fourg.fins_id, objects.co_name 
	order by objects.co_name,to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24')
	"""
	else:
		sqlstring1=""" 
	group by to_char(fourg.period_start_time,'yyyy/mm/dd'), to_char(fourg.period_start_time,'hh24'), fourg.fins_id, objects.co_name,ta_id 
	order by objects.co_name,ta_id,to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24')
	"""
else:
	if (selectelement=='MMESGSN'):
		sqlstring1="""
	group by to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24:mi'), fourg.fins_ID, objects.co_name 
	order by objects.CO_name,to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24:mi')
	"""
	else:
		sqlstring1=""" 
	group by to_char(fourg.period_start_time,'yyyy/mm/dd'), to_char(fourg.period_start_time,'hh24:mi'), fourg.fins_id, objects.co_name,ta_id 
	order by objects.co_name,ta_id,to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24:mi')
	"""
sqlstring=sqlstring+sqlstringtime+sqlstring1
#print sqlstring
cursor.execute(sqlstring)

row11=cursor.fetchall()
for x in row11:
	if (localsave==0):
		print "<Item>"
	elif localsave==1:
		reportfile.write("\n")
	for y in x:
		if (localsave==0):
			print "<ItemCol>"
			print "<value>"
			print y
			print "</value>"
			print "</ItemCol>"
		elif localsave==1:
			reportfile.write(str(y))
			reportfile.write(',')
	if (localsave==0):
		print "</Item>"
	
	
if (localsave==0):
	print "</location>"
elif localsave==1:
	reportfile.write("\n")

# S1HO

if (localsave==0):
	print "<location>"
	print "<locationid>13</locationid>"
	print "<passed>true</passed>"
	print "<message>LTE�ƶ�����2 ͳ��</message>"
	print "<Title>"
	print "<name>�豸����</name>"
	print "<name>����</name>"
	print "<name>ʱ��</name>"
	print "<name>TAC</name>"
	print "<name>S1HO MME fail</name>"
	print "<name>S1HO ENB fail</name>"
	print "<name>S1HO SGW fail</name>"
	print "<name>S1HO Coll fail</name>"
	print "<name>S1HO UNSPEC failure</name>"
	print "<name>S1HO UNKNOWN TAGET ID</name>"
	print "<name>S1HO TARGT FAIL</name>"
	print "<name>S1HO CANCELLATION</name>"
	print "<name>S1HO INTERACTION</name>"
	print "<name>S1HO TARGET not allow</name>"
	print "<name>S1HO CELL not avail</name>"
	print "<name>S1HO NO radio resource</name>"
	print "<name>S1HO algo not support</name>"
	print "<name>S1HO UNSPEC CAUSE</name>"
	print "</Title>"
elif localsave==1:
	reportfile.write("LTE�ƶ�����2 ͳ��")
	reportfile.write("\n")
	reportfile.write("�豸����,")
	reportfile.write("����,")
	reportfile.write("ʱ��,")
	reportfile.write("TAC,")
	reportfile.write("S1HO MME fail,")
	reportfile.write("S1HO ENB fail,")
	reportfile.write("S1HO SGW fail,")
	reportfile.write("S1HO Coll fail,")
	reportfile.write("S1HO UNSPEC failure,")
	reportfile.write("S1HO UNKNOWN TAGET ID,")
	reportfile.write("S1HO TARGT FAIL,")
	reportfile.write("S1HO CANCELLATION,")
	reportfile.write("S1HO INTERACTION,")
	reportfile.write("S1HO TARGET not allow,")
	reportfile.write("S1HO CELL not avail,")
	reportfile.write("S1HO NO radio resource,")
	reportfile.write("S1HO algo not support,")
	reportfile.write("S1HO UNSPEC CAUSE")

if (selectperiod=='60'):
	if (selectelement=='MMESGSN'):
		sqlstring="""
select
objects.CO_NAME,
to_char(fourg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(fourg.period_start_time,'hh24') Stime,
'ALL' elementtype,
sum(EPS_S1HO_DUE_TO_MME_FAIL) EPS_S1HO_DUE_TO_MME_FAIL,
sum(EPS_S1HO_ENB_ERROR_FAIL) EPS_S1HO_ENB_ERROR_FAIL,
sum(EPS_S1HO_SGW_ERROR_FAIL) EPS_S1HO_SGW_ERROR_FAIL,
sum(EPS_S1HO_COLLISION_FAIL) EPS_S1HO_COLLISION_FAIL,
sum(EPS_S1HO_UNSPECIFIED_RE_FAIL) EPS_S1HO_UNSPECIFIED_RE_FAIL,
sum(EPS_S1HO_UNKNOWN_TARGET_FAIL) EPS_S1HO_UNKNOWN_TARGET_FAIL,
sum(EPS_S1HO_IN_TARGET_SYST_FAIL) EPS_S1HO_IN_TARGET_SYST_FAIL,
sum(EPS_S1HO_HO_CANCELLED_FAIL) EPS_S1HO_HO_CANCELLED_FAIL,
sum(EPS_S1HO_INTERACTION_WI_FAIL) EPS_S1HO_INTERACTION_WI_FAIL,
sum(EPS_S1HO_TARGET_ALLOW_FAIL) EPS_S1HO_TARGET_ALLOW_FAIL,
sum(EPS_S1HO_CELL_NOT_AVAIL_FAIL) EPS_S1HO_CELL_NOT_AVAIL_FAIL,
sum(EPS_S1HO_NO_RADIO_RESOU_FAIL) EPS_S1HO_NO_RADIO_RESOU_FAIL,
sum(EPS_S1HO_ALG_NOT_SUPP_FAIL) EPS_S1HO_ALG_NOT_SUPP_FAIL,
sum(EPS_S1HO_UNSPEC_CAUSE_FAIL) EPS_S1HO_UNSPEC_CAUSE_FAIL 
from 	PCOFNS_PS_MMMT_TA_RAW fourg,
			UTP_COMMON_OBJECTS objects
where 
fourg.FINS_ID=objects.CO_GID
"""
	else:
		sqlstring="""
select
objects.CO_NAME,
to_char(fourg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(fourg.period_start_time,'hh24') Stime,
ta_id elementtype,
sum(EPS_S1HO_DUE_TO_MME_FAIL) EPS_S1HO_DUE_TO_MME_FAIL,
sum(EPS_S1HO_ENB_ERROR_FAIL) EPS_S1HO_ENB_ERROR_FAIL,
sum(EPS_S1HO_SGW_ERROR_FAIL) EPS_S1HO_SGW_ERROR_FAIL,
sum(EPS_S1HO_COLLISION_FAIL) EPS_S1HO_COLLISION_FAIL,
sum(EPS_S1HO_UNSPECIFIED_RE_FAIL) EPS_S1HO_UNSPECIFIED_RE_FAIL,
sum(EPS_S1HO_UNKNOWN_TARGET_FAIL) EPS_S1HO_UNKNOWN_TARGET_FAIL,
sum(EPS_S1HO_IN_TARGET_SYST_FAIL) EPS_S1HO_IN_TARGET_SYST_FAIL,
sum(EPS_S1HO_HO_CANCELLED_FAIL) EPS_S1HO_HO_CANCELLED_FAIL,
sum(EPS_S1HO_INTERACTION_WI_FAIL) EPS_S1HO_INTERACTION_WI_FAIL,
sum(EPS_S1HO_TARGET_ALLOW_FAIL) EPS_S1HO_TARGET_ALLOW_FAIL,
sum(EPS_S1HO_CELL_NOT_AVAIL_FAIL) EPS_S1HO_CELL_NOT_AVAIL_FAIL,
sum(EPS_S1HO_NO_RADIO_RESOU_FAIL) EPS_S1HO_NO_RADIO_RESOU_FAIL,
sum(EPS_S1HO_ALG_NOT_SUPP_FAIL) EPS_S1HO_ALG_NOT_SUPP_FAIL,
sum(EPS_S1HO_UNSPEC_CAUSE_FAIL) EPS_S1HO_UNSPEC_CAUSE_FAIL 
from 	PCOFNS_PS_MMMT_TA_RAW fourg,
			UTP_COMMON_OBJECTS objects
where 
fourg.FINS_ID=objects.CO_GID and EPS_ATTACH_SUCC+EPS_ATTACH_FAIL>0
"""
else:
	if (selectelement=='MMESGSN'):	
		sqlstring="""
select
objects.CO_NAME,
to_char(fourg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(fourg.period_start_time,'hh24:mi') Stime,
'ALL' elementtype,
sum(EPS_S1HO_DUE_TO_MME_FAIL) EPS_S1HO_DUE_TO_MME_FAIL,
sum(EPS_S1HO_ENB_ERROR_FAIL) EPS_S1HO_ENB_ERROR_FAIL,
sum(EPS_S1HO_SGW_ERROR_FAIL) EPS_S1HO_SGW_ERROR_FAIL,
sum(EPS_S1HO_COLLISION_FAIL) EPS_S1HO_COLLISION_FAIL,
sum(EPS_S1HO_UNSPECIFIED_RE_FAIL) EPS_S1HO_UNSPECIFIED_RE_FAIL,
sum(EPS_S1HO_UNKNOWN_TARGET_FAIL) EPS_S1HO_UNKNOWN_TARGET_FAIL,
sum(EPS_S1HO_IN_TARGET_SYST_FAIL) EPS_S1HO_IN_TARGET_SYST_FAIL,
sum(EPS_S1HO_HO_CANCELLED_FAIL) EPS_S1HO_HO_CANCELLED_FAIL,
sum(EPS_S1HO_INTERACTION_WI_FAIL) EPS_S1HO_INTERACTION_WI_FAIL,
sum(EPS_S1HO_TARGET_ALLOW_FAIL) EPS_S1HO_TARGET_ALLOW_FAIL,
sum(EPS_S1HO_CELL_NOT_AVAIL_FAIL) EPS_S1HO_CELL_NOT_AVAIL_FAIL,
sum(EPS_S1HO_NO_RADIO_RESOU_FAIL) EPS_S1HO_NO_RADIO_RESOU_FAIL,
sum(EPS_S1HO_ALG_NOT_SUPP_FAIL) EPS_S1HO_ALG_NOT_SUPP_FAIL,
sum(EPS_S1HO_UNSPEC_CAUSE_FAIL) EPS_S1HO_UNSPEC_CAUSE_FAIL 
from 	PCOFNS_PS_MMMT_TA_RAW fourg,
			UTP_COMMON_OBJECTS objects
where 
fourg.FINS_ID=objects.CO_GID
"""
	else:
		sqlstring="""
select
objects.CO_NAME,
to_char(fourg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(fourg.period_start_time,'hh24:mi') Stime,
ta_id elementtype,
sum(EPS_S1HO_DUE_TO_MME_FAIL) EPS_S1HO_DUE_TO_MME_FAIL,
sum(EPS_S1HO_ENB_ERROR_FAIL) EPS_S1HO_ENB_ERROR_FAIL,
sum(EPS_S1HO_SGW_ERROR_FAIL) EPS_S1HO_SGW_ERROR_FAIL,
sum(EPS_S1HO_COLLISION_FAIL) EPS_S1HO_COLLISION_FAIL,
sum(EPS_S1HO_UNSPECIFIED_RE_FAIL) EPS_S1HO_UNSPECIFIED_RE_FAIL,
sum(EPS_S1HO_UNKNOWN_TARGET_FAIL) EPS_S1HO_UNKNOWN_TARGET_FAIL,
sum(EPS_S1HO_IN_TARGET_SYST_FAIL) EPS_S1HO_IN_TARGET_SYST_FAIL,
sum(EPS_S1HO_HO_CANCELLED_FAIL) EPS_S1HO_HO_CANCELLED_FAIL,
sum(EPS_S1HO_INTERACTION_WI_FAIL) EPS_S1HO_INTERACTION_WI_FAIL,
sum(EPS_S1HO_TARGET_ALLOW_FAIL) EPS_S1HO_TARGET_ALLOW_FAIL,
sum(EPS_S1HO_CELL_NOT_AVAIL_FAIL) EPS_S1HO_CELL_NOT_AVAIL_FAIL,
sum(EPS_S1HO_NO_RADIO_RESOU_FAIL) EPS_S1HO_NO_RADIO_RESOU_FAIL,
sum(EPS_S1HO_ALG_NOT_SUPP_FAIL) EPS_S1HO_ALG_NOT_SUPP_FAIL,
sum(EPS_S1HO_UNSPEC_CAUSE_FAIL) EPS_S1HO_UNSPEC_CAUSE_FAIL 
from 	PCOFNS_PS_MMMT_TA_RAW fourg,
			UTP_COMMON_OBJECTS objects
where 
fourg.FINS_ID=objects.CO_GID and EPS_ATTACH_SUCC+EPS_ATTACH_FAIL>0
"""

if (selectmmesgsn<>'all'):
	sqlstring=sqlstring+" and objects.co_name= \'"+selectmmesgsn+"\' " 

sqlstringtime=" and to_char(fourg.period_start_time,\'yyyy/mm/dd/hh24\')>=\'"+startdate+"/"+starttime+"\' and to_char(fourg.period_start_time,\'yyyy/mm/dd/hh24\')<=\'"+stopdate+"/"+stoptime + "\' "

if (selectperiod=='60'):
	if (selectelement=='MMESGSN'):
		sqlstring1=""" 
	group by to_char(fourg.period_start_time,'yyyy/mm/dd'), to_char(fourg.period_start_time,'hh24'), fourg.fins_id, objects.co_name 
	order by objects.co_name,to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24')
	"""
	else:
		sqlstring1=""" 
	group by to_char(fourg.period_start_time,'yyyy/mm/dd'), to_char(fourg.period_start_time,'hh24'), fourg.fins_id, objects.co_name,ta_id 
	order by objects.co_name,ta_id,to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24')
	"""
else:
	if (selectelement=='MMESGSN'):
		sqlstring1="""
	group by to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24:mi'), fourg.fins_ID, objects.co_name 
	order by objects.CO_name,to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24:mi')
	"""
	else:
		sqlstring1="""
	group by to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24:mi'), fourg.fins_ID, objects.co_name,ta_id 
	order by objects.CO_name,ta_id,to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24:mi')
	"""
		
sqlstring=sqlstring+sqlstringtime+sqlstring1
#print sqlstring
cursor.execute(sqlstring)

row12=cursor.fetchall()
for x in row12:
	if (localsave==0):
		print "<Item>"
	elif localsave==1:
		reportfile.write("\n")
	for y in x:
		if (localsave==0):
			print "<ItemCol>"
			print "<value>"
			print y
			print "</value>"
			print "</ItemCol>"
		elif localsave==1:
			reportfile.write(str(y))
			reportfile.write(",")
	if (localsave==0):
		print "</Item>"
	
	
if (localsave==0):
	print "</location>"
elif localsave==1:
	reportfile.write("\n")

# TAU , Paging

if (localsave==0):
	print "<location>"
	print "<locationid>14</locationid>"
	print "<passed>true</passed>"
	print "<message>LTE�ƶ�����3 ͳ��</message>"
	print "<Title>"
	print "<name>�豸����</name>"
	print "<name>����</name>"
	print "<name>ʱ��</name>"
	print "<name>TAC</name>"
	print "<name>TAU-1</name>"
	print "<name>TAU-2</name>"
	print "<name>TAU-3</name>"
	print "<name>TAU-4</name>"
	print "<name>TAU-5</name>"
	print "<name>TAU-6</name>"
	print "<name>TAU-7</name>"
	print "<name>TAU-8</name>"
	print "<name>TAU-Succ</name>"
	print "<name>TAU�ɹ���</name>"
	print "<name>��ϵͳTAU�ɹ���</name>"
	print "<name>һ��Ѱ���ɹ�����</name>"
	print "<name>����Ѱ���ɹ�����</name>"
	print "<name>Ѱ������</name>"
	print "<name>һ��Ѱ���ɹ���</name>"
	print "<name>PAGING�ɹ���</name>"
	print "</Title>"
elif localsave==1:
	reportfile.write("LTE�ƶ�����3 ͳ��")
	reportfile.write("\n")
	reportfile.write("�豸����,")
	reportfile.write("����,")
	reportfile.write("ʱ��,")
	reportfile.write("TAC,")
	reportfile.write("TAU-1,")
	reportfile.write("TAU-2,")
	reportfile.write("TAU-3,")
	reportfile.write("TAU-4,")
	reportfile.write("TAU-5,")
	reportfile.write("TAU-6,")
	reportfile.write("TAU-7,")
	reportfile.write("TAU-8,")
	reportfile.write("TAU-Succ,")
	reportfile.write("TAU�ɹ���,")
	reportfile.write("��ϵͳTAU�ɹ���,")
	reportfile.write("һ��Ѱ���ɹ�����,")
	reportfile.write("����Ѱ���ɹ�����,")
	reportfile.write("Ѱ������,")
	reportfile.write("һ��Ѱ���ɹ���,")
	reportfile.write("PAGING�ɹ���")

if (selectperiod=='60'):
	if (selectelement=='MMESGSN'):
		sqlstring="""
select
objects.CO_NAME,
to_char(fourg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(fourg.period_start_time,'hh24') Stime,
'ALL' elementtype,
sum(INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL) one,
sum(INTERMME_TAU_WO_SGW_CHG_SUCC) two,
sum(INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL) three,
sum(INTERMME_TAU_WO_SGW_CHG_SUCC) four,
sum(EPS_TAU_FAIL-INTRATAU_WO_SGW_CHANGE_FAIL+INTRAMME_TAU_SGW_CHG_SUCC) five,
sum(INTRAMME_TAU_SGW_CHG_SUCC) six,
sum(INTRATAU_WO_SGW_CHANGE_SUCC+INTRATAU_WO_SGW_CHANGE_FAIL) seven,
sum(INTRATAU_WO_SGW_CHANGE_SUCC) eight,
decode(nvl(sum(INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL+INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL+EPS_TAU_FAIL-INTRATAU_WO_SGW_CHANGE_FAIL+INTRAMME_TAU_SGW_CHG_SUCC+INTRATAU_WO_SGW_CHANGE_SUCC+INTRATAU_WO_SGW_CHANGE_FAIL),0),0,0,round((sum(INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_WO_SGW_CHG_SUCC+INTRAMME_TAU_SGW_CHG_SUCC+INTRATAU_WO_SGW_CHANGE_SUCC)/sum(INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL+INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL+EPS_TAU_FAIL-INTRATAU_WO_SGW_CHANGE_FAIL+INTRAMME_TAU_SGW_CHG_SUCC+INTRATAU_WO_SGW_CHANGE_SUCC+INTRATAU_WO_SGW_CHANGE_FAIL)*100),4)) tau_succ_rate,
decode(nvl((sum(EPS_TAU_SUCC+EPS_TAU_FAIL)),0),0,0,(round((sum(EPS_TAU_SUCC)/(sum(EPS_TAU_SUCC+EPS_TAU_FAIL))),4)*100)) TAU_SR,
decode(nvl((sum(EPS_INTER_TAU_OG_SUCC+EPS_INTER_TAU_OG_FAIL)),0),0,0,(round((sum(EPS_INTER_TAU_OG_SUCC)/(sum(EPS_INTER_TAU_OG_SUCC+EPS_INTER_TAU_OG_FAIL))),4)*100)) InterSystem_TAU_SR,
sum(EPS_PAGING_1ST_ATTEMPT_SUCC) firstsucc,
sum(EPS_PAGING_SUCC-EPS_PAGING_1ST_ATTEMPT_SUCC) secondsucc,
sum(EPS_PAGING_SUCC+EPS_PAGING_FAIL) page_att,
decode(nvl(sum(EPS_PAGING_SUCC+EPS_PAGING_FAIL),0),0,0,round(sum(EPS_PAGING_1ST_ATTEMPT_SUCC)/sum(EPS_PAGING_SUCC+EPS_PAGING_FAIL),4)*100) firstpagesucc_rate,
decode(nvl((sum(EPS_PAGING_SUCC+EPS_PAGING_FAIL)),0),0,0,(round((sum(EPS_PAGING_SUCC)/(sum(EPS_PAGING_SUCC+EPS_PAGING_FAIL))),4)*100)) PAGING_SR
from 	PCOFNS_PS_MMMT_TA_RAW fourg,
			UTP_COMMON_OBJECTS objects
where 
fourg.FINS_ID=objects.CO_GID
"""
	else:
		sqlstring="""
select
objects.CO_NAME,
to_char(fourg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(fourg.period_start_time,'hh24') Stime,
ta_id elementtype,
sum(INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL) one,
sum(INTERMME_TAU_WO_SGW_CHG_SUCC) two,
sum(INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL) three,
sum(INTERMME_TAU_WO_SGW_CHG_SUCC) four,
sum(EPS_TAU_FAIL-INTRATAU_WO_SGW_CHANGE_FAIL+INTRAMME_TAU_SGW_CHG_SUCC) five,
sum(INTRAMME_TAU_SGW_CHG_SUCC) six,
sum(INTRATAU_WO_SGW_CHANGE_SUCC+INTRATAU_WO_SGW_CHANGE_FAIL) seven,
sum(INTRATAU_WO_SGW_CHANGE_SUCC) eight,
decode(nvl(sum(INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL+INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL+EPS_TAU_FAIL-INTRATAU_WO_SGW_CHANGE_FAIL+INTRAMME_TAU_SGW_CHG_SUCC+INTRATAU_WO_SGW_CHANGE_SUCC+INTRATAU_WO_SGW_CHANGE_FAIL),0),0,0,round((sum(INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_WO_SGW_CHG_SUCC+INTRAMME_TAU_SGW_CHG_SUCC+INTRATAU_WO_SGW_CHANGE_SUCC)/sum(INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL+INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL+EPS_TAU_FAIL-INTRATAU_WO_SGW_CHANGE_FAIL+INTRAMME_TAU_SGW_CHG_SUCC+INTRATAU_WO_SGW_CHANGE_SUCC+INTRATAU_WO_SGW_CHANGE_FAIL)*100),4)) tau_succ_rate,
decode(nvl((sum(EPS_TAU_SUCC+EPS_TAU_FAIL)),0),0,0,(round((sum(EPS_TAU_SUCC)/(sum(EPS_TAU_SUCC+EPS_TAU_FAIL))),4)*100)) TAU_SR,
decode(nvl((sum(EPS_INTER_TAU_OG_SUCC+EPS_INTER_TAU_OG_FAIL)),0),0,0,(round((sum(EPS_INTER_TAU_OG_SUCC)/(sum(EPS_INTER_TAU_OG_SUCC+EPS_INTER_TAU_OG_FAIL))),4)*100)) InterSystem_TAU_SR,
sum(EPS_PAGING_1ST_ATTEMPT_SUCC) firstsucc,
sum(EPS_PAGING_SUCC-EPS_PAGING_1ST_ATTEMPT_SUCC) secondsucc,
sum(EPS_PAGING_SUCC+EPS_PAGING_FAIL) page_att,
decode(nvl(sum(EPS_PAGING_SUCC+EPS_PAGING_FAIL),0),0,0,round(sum(EPS_PAGING_1ST_ATTEMPT_SUCC)/sum(EPS_PAGING_SUCC+EPS_PAGING_FAIL),4)*100) firstpagesucc_rate,
decode(nvl((sum(EPS_PAGING_SUCC+EPS_PAGING_FAIL)),0),0,0,(round((sum(EPS_PAGING_SUCC)/(sum(EPS_PAGING_SUCC+EPS_PAGING_FAIL))),4)*100)) PAGING_S
from 	PCOFNS_PS_MMMT_TA_RAW fourg,
			UTP_COMMON_OBJECTS objects
where 
fourg.FINS_ID=objects.CO_GID and EPS_ATTACH_SUCC+EPS_ATTACH_FAIL>0
"""
else:
	if (selectelement=='MMESGSN'):	
		sqlstring="""
select
objects.CO_NAME,
to_char(fourg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(fourg.period_start_time,'hh24:mi') Stime,
'ALL' elementtype,
sum(INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL) one,
sum(INTERMME_TAU_WO_SGW_CHG_SUCC) two,
sum(INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL) three,
sum(INTERMME_TAU_WO_SGW_CHG_SUCC) four,
sum(EPS_TAU_FAIL-INTRATAU_WO_SGW_CHANGE_FAIL+INTRAMME_TAU_SGW_CHG_SUCC) five,
sum(INTRAMME_TAU_SGW_CHG_SUCC) six,
sum(INTRATAU_WO_SGW_CHANGE_SUCC+INTRATAU_WO_SGW_CHANGE_FAIL) seven,
sum(INTRATAU_WO_SGW_CHANGE_SUCC) eight,
decode(nvl(sum(INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL+INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL+EPS_TAU_FAIL-INTRATAU_WO_SGW_CHANGE_FAIL+INTRAMME_TAU_SGW_CHG_SUCC+INTRATAU_WO_SGW_CHANGE_SUCC+INTRATAU_WO_SGW_CHANGE_FAIL),0),0,0,round((sum(INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_WO_SGW_CHG_SUCC+INTRAMME_TAU_SGW_CHG_SUCC+INTRATAU_WO_SGW_CHANGE_SUCC)/sum(INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL+INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL+EPS_TAU_FAIL-INTRATAU_WO_SGW_CHANGE_FAIL+INTRAMME_TAU_SGW_CHG_SUCC+INTRATAU_WO_SGW_CHANGE_SUCC+INTRATAU_WO_SGW_CHANGE_FAIL)*100),4)) tau_succ_rate,
decode(nvl((sum(EPS_TAU_SUCC+EPS_TAU_FAIL)),0),0,0,(round((sum(EPS_TAU_SUCC)/(sum(EPS_TAU_SUCC+EPS_TAU_FAIL))),4)*100)) TAU_SR,
decode(nvl((sum(EPS_INTER_TAU_OG_SUCC+EPS_INTER_TAU_OG_FAIL)),0),0,0,(round((sum(EPS_INTER_TAU_OG_SUCC)/(sum(EPS_INTER_TAU_OG_SUCC+EPS_INTER_TAU_OG_FAIL))),4)*100)) InterSystem_TAU_SR,
sum(EPS_PAGING_1ST_ATTEMPT_SUCC) firstsucc,
sum(EPS_PAGING_SUCC-EPS_PAGING_1ST_ATTEMPT_SUCC) secondsucc,
sum(EPS_PAGING_SUCC+EPS_PAGING_FAIL) page_att,
decode(nvl(sum(EPS_PAGING_SUCC+EPS_PAGING_FAIL),0),0,0,round(sum(EPS_PAGING_1ST_ATTEMPT_SUCC)/sum(EPS_PAGING_SUCC+EPS_PAGING_FAIL),4)*100) firstpagesucc_rate,
decode(nvl((sum(EPS_PAGING_SUCC+EPS_PAGING_FAIL)),0),0,0,(round((sum(EPS_PAGING_SUCC)/(sum(EPS_PAGING_SUCC+EPS_PAGING_FAIL))),4)*100)) PAGING_SR
from 	PCOFNS_PS_MMMT_TA_RAW fourg,
			UTP_COMMON_OBJECTS objects
where 
fourg.FINS_ID=objects.CO_GID
"""
	else:
		sqlstring="""
select
objects.CO_NAME,
to_char(fourg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(fourg.period_start_time,'hh24:mi') Stime,
ta_id elementtype,
sum(INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL) one,
sum(INTERMME_TAU_WO_SGW_CHG_SUCC) two,
sum(INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL) three,
sum(INTERMME_TAU_WO_SGW_CHG_SUCC) four,
sum(EPS_TAU_FAIL-INTRATAU_WO_SGW_CHANGE_FAIL+INTRAMME_TAU_SGW_CHG_SUCC) five,
sum(INTRAMME_TAU_SGW_CHG_SUCC) six,
sum(INTRATAU_WO_SGW_CHANGE_SUCC+INTRATAU_WO_SGW_CHANGE_FAIL) seven,
sum(INTRATAU_WO_SGW_CHANGE_SUCC) eight,
decode(nvl(sum(INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL+INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL+EPS_TAU_FAIL-INTRATAU_WO_SGW_CHANGE_FAIL+INTRAMME_TAU_SGW_CHG_SUCC+INTRATAU_WO_SGW_CHANGE_SUCC+INTRATAU_WO_SGW_CHANGE_FAIL),0),0,0,round((sum(INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_WO_SGW_CHG_SUCC+INTRAMME_TAU_SGW_CHG_SUCC+INTRATAU_WO_SGW_CHANGE_SUCC)/sum(INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL+INTERMME_TAU_WO_SGW_CHG_SUCC+INTERMME_TAU_IN_FAIL+EPS_TAU_FAIL-INTRATAU_WO_SGW_CHANGE_FAIL+INTRAMME_TAU_SGW_CHG_SUCC+INTRATAU_WO_SGW_CHANGE_SUCC+INTRATAU_WO_SGW_CHANGE_FAIL)*100),4)) tau_succ_rate,
decode(nvl((sum(EPS_TAU_SUCC+EPS_TAU_FAIL)),0),0,0,(round((sum(EPS_TAU_SUCC)/(sum(EPS_TAU_SUCC+EPS_TAU_FAIL))),4)*100)) TAU_SR,
decode(nvl((sum(EPS_INTER_TAU_OG_SUCC+EPS_INTER_TAU_OG_FAIL)),0),0,0,(round((sum(EPS_INTER_TAU_OG_SUCC)/(sum(EPS_INTER_TAU_OG_SUCC+EPS_INTER_TAU_OG_FAIL))),4)*100)) InterSystem_TAU_SR,
sum(EPS_PAGING_1ST_ATTEMPT_SUCC) firstsucc,
sum(EPS_PAGING_SUCC-EPS_PAGING_1ST_ATTEMPT_SUCC) secondsucc,
sum(EPS_PAGING_SUCC+EPS_PAGING_FAIL) page_att,
decode(nvl(sum(EPS_PAGING_SUCC+EPS_PAGING_FAIL),0),0,0,round(sum(EPS_PAGING_1ST_ATTEMPT_SUCC)/sum(EPS_PAGING_SUCC+EPS_PAGING_FAIL),4)*100) firstpagesucc_rate,
decode(nvl((sum(EPS_PAGING_SUCC+EPS_PAGING_FAIL)),0),0,0,(round((sum(EPS_PAGING_SUCC)/(sum(EPS_PAGING_SUCC+EPS_PAGING_FAIL))),4)*100)) PAGING_SR
from 	PCOFNS_PS_MMMT_TA_RAW fourg,
			UTP_COMMON_OBJECTS objects
where 
fourg.FINS_ID=objects.CO_GID and EPS_ATTACH_SUCC+EPS_ATTACH_FAIL>0
"""

if (selectmmesgsn<>'all'):
	sqlstring=sqlstring+" and objects.co_name= \'"+selectmmesgsn+"\' " 

sqlstringtime=" and to_char(fourg.period_start_time,\'yyyy/mm/dd/hh24\')>=\'"+startdate+"/"+starttime+"\' and to_char(fourg.period_start_time,\'yyyy/mm/dd/hh24\')<=\'"+stopdate+"/"+stoptime + "\' "

if (selectperiod=='60'):
	if (selectelement=='MMESGSN'):
		sqlstring1=""" 
	group by to_char(fourg.period_start_time,'yyyy/mm/dd'), to_char(fourg.period_start_time,'hh24'), fourg.fins_id, objects.co_name 
	order by objects.co_name,to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24')
	"""
	else:
		sqlstring1=""" 
	group by to_char(fourg.period_start_time,'yyyy/mm/dd'), to_char(fourg.period_start_time,'hh24'), fourg.fins_id, objects.co_name,ta_id 
	order by objects.co_name,ta_id,to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24')
	"""
else:
	if (selectelement=='MMESGSN'):
		sqlstring1="""
	group by to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24:mi'), fourg.fins_ID, objects.co_name 
	order by objects.CO_name,to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24:mi')
	"""
	else:
		sqlstring1="""
	group by to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24:mi'), fourg.fins_ID, objects.co_name,ta_id 
	order by objects.CO_name,ta_id,to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24:mi')
	"""
		
sqlstring=sqlstring+sqlstringtime+sqlstring1
#print sqlstring
cursor.execute(sqlstring)

row13=cursor.fetchall()
for x in row13:
	if (localsave==0):
		print "<Item>"
	elif localsave==1:
		reportfile.write("\n")
	for y in x:
		if (localsave==0):
			print "<ItemCol>"
			print "<value>"
			print y
			print "</value>"
			print "</ItemCol>"
		elif localsave==1:
			reportfile.write(str(y))
			reportfile.write(',')
	if (localsave==0):
		print "</Item>"
	
	
if (localsave==0):
	print "</location>"
elif localsave==1:
	reportfile.write("\n")


# ����ͳ��

if (localsave==0):
	print "<location>"
	print "<locationid>15</locationid>"
	print "<passed>true</passed>"
	print "<message>����ͳ�� 2/3/4G</message>"
	print "<Title>"
	print "<name>�豸ID</name>"
	print "<name>�豸����</name>"
	print "<name>����</name>"
	print "<name>ʱ��</name>"
	print "<name>MME CPU Type</name>"
	print "<name>MME CPUƽ������</name>"
	print "<name>MME CPU��ֵ����</name>"
	print "<name>MME WO�忨��</name>"
	print "</Title>"
elif localsave==1:
	reportfile.write("����ͳ�� 2/3/4G")
	reportfile.write("\n")
	reportfile.write("�豸ID,")
	reportfile.write("�豸����,")
	reportfile.write("����,")
	reportfile.write("ʱ��,")
	reportfile.write("MME CPU Type,")
	reportfile.write("MME CPUƽ������,")
	reportfile.write("MME CPU��ֵ����,")
	reportfile.write("MME WO�忨��")


if (selectperiod=='60'):
	sqlstring="""
select
cpuload.fins_ID,
objects.co_Name MMESGSN,
cpuload.cu,
to_char(cpuload.period_start_time,'yyyy/mm/dd') Sdate,
to_char(cpuload.period_start_time,'hh24') Stime,
decode(nvl((sum(cpuload.AVE_LOAD_RATE_DEN)/15),0),0,0,(round(sum(cpuload.AVE_LOAD_RATE_SUM/15)/(sum(cpuload.AVE_LOAD_RATE_DEN)/15),2))) avecpuload,
max(cpuload.PEAK_LOAD_RATE_OF_OBJECT),
sum(cpuload.AVE_LOAD_RATE_DEN)/60
from 	PCOFNS_PS_LOAD_INDEX_RAW cpuload,  
		  UTP_COMMON_OBJECTS objects
where 
cpuload.fins_ID=objects.co_gid and cpuload.object_state=0
"""
else:
	sqlstring="""
select
cpuload.fins_ID,
objects.co_Name MMESGSN,
CPULOAD.CU,
to_char(cpuload.period_start_time,'yyyy/mm/dd') Sdate,
to_char(cpuload.period_start_time,'hh24:mi') Stime,
decode(nvl((sum(cpuload.AVE_LOAD_RATE_DEN)/15),0),0,0,(round(sum(cpuload.AVE_LOAD_RATE_SUM/15)/(sum(cpuload.AVE_LOAD_RATE_DEN)/15),2))) avecpuload,
max(cpuload.PEAK_LOAD_RATE_OF_OBJECT),
sum(cpuload.AVE_LOAD_RATE_DEN)/15
from 	PCOFNS_PS_LOAD_INDEX_RAW cpuload,  
		  UTP_COMMON_OBJECTS objects
where 
cpuload.fins_ID=objects.co_gid and cpuload.object_state=0
"""

#decode(nvl((sum(EPS_DEF_BEARER_ACT_SUCC+EPS_DEF_BEARER_ACT_FAIL)),0),0,0,(round((sum(EPS_DEF_BEARER_ACT_SUCC)/(sum(#EPS_DEF_BEARER_ACT_SUCC+EPS_DEF_BEARER_ACT_FAIL))),4)*100)) ActDefault_EPS_Bearer_SR,

if (selectmmesgsn<>'all'):
	sqlstring=sqlstring+" and objects.co_name= \'"+selectmmesgsn+"\' " 

sqlstringtime=" and to_char(cpuload.period_start_time,\'yyyy/mm/dd/hh24\')>=\'"+startdate+"/"+starttime+"\' and to_char(cpuload.period_start_time,\'yyyy/mm/dd/hh24\')<=\'"+stopdate+"/"+stoptime + "\' "

if (selectperiod=='60'):
	sqlstring1=""" 
	group by to_char(cpuload.period_start_time,'yyyy/mm/dd'), to_char(cpuload.period_start_time,'hh24'), cpuload.fins_id, objects.co_name ,cpuload.CU
	order by objects.co_name,to_char(cpuload.period_start_time,'yyyy/mm/dd'),to_char(cpuload.period_start_time,'hh24')
	"""
else:
	sqlstring1="""
	group by to_char(cpuload.period_start_time,'yyyy/mm/dd'),to_char(cpuload.period_start_time,'hh24:mi'), cpuload.fins_ID, objects.co_name ,cpuload.CU
	order by objects.CO_name,to_char(cpuload.period_start_time,'yyyy/mm/dd'),to_char(cpuload.period_start_time,'hh24:mi')
	"""
sqlstring=sqlstring+sqlstringtime+sqlstring1
#print sqlstring

cursor.execute(sqlstring)

row14=cursor.fetchall()
for x in row14:
	if (localsave==0):
		print "<Item>"
	elif localsave==1:
		reportfile.write("\n")
	for y in x:
		if (localsave==0):
			print "<ItemCol>"
			print "<value>"
			print y
			print "</value>"
			print "</ItemCol>"
		elif localsave==1:
			reportfile.write(str(y))
			reportfile.write(',')
	if (localsave==0):
		print "</Item>"
	
	
if (localsave==0):
	print "</location>"
elif localsave==1:
	reportfile.write("\n")



# ��Ȩͳ��

if (localsave==0):
	print "<location>"
	print "<locationid>16</locationid>"
	print "<passed>true</passed>"
	print "<message> ��Ȩ�ɹ���4G</message>"
	print "<Title>"
	print "<name>�豸ID</name>"
	print "<name>�豸����</name>"
	print "<name>����</name>"
	print "<name>ʱ��</name>"
	print "<name>ULR����</name>"
	print "<name>ULR�ɹ�����</name>"
	print "<name>ULR�ɹ���</name>"
	print "<name>��Ȩ�ɹ�����</name>"
	print "<name>��Ȩ����</name>"
	print "<name>��Ȩʧ��UE Reject����</name>"
	print "<name>��Ȩʧ��MME Reject����</name>"
	print "<name>��Ȩ�ɹ���</name>"
	print "</Title>"
elif localsave==1:   
	reportfile.write("��Ȩ�ɹ���4G")
	reportfile.write("\n")
	reportfile.write("�豸ID,")
	reportfile.write("�豸����,")
	reportfile.write("����,")
	reportfile.write("ʱ��,")
	reportfile.write("ULR����,")
	reportfile.write("ULR�ɹ�����,")
	reportfile.write("ULR�ɹ���,")
	reportfile.write("��Ȩ�ɹ�����,")
	reportfile.write("��Ȩ����,")
	reportfile.write("��Ȩʧ��UE Reject����,")
	reportfile.write("��Ȩʧ��MME Reject����,")
	reportfile.write("��Ȩ�ɹ���")


if (selectperiod=='60'):
	sqlstring="""
select
fourg.fins_ID,
objects.co_Name MMESGSN,
to_char(fourg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(fourg.period_start_time,'hh24') Stime,
sum(S6A_UPDATE_LOCATION_REQ_SENT) ULR_REQ,
sum(S6A_UPDATE_LOCATION_ANS_RCV) ULR_SUCC,
decode(nvl(sum(S6A_UPDATE_LOCATION_REQ_SENT),0),0,0,round(sum(S6A_UPDATE_LOCATION_ANS_RCV)/sum(S6A_UPDATE_LOCATION_REQ_SENT)*100,2)) ulr_succ_rate,
sum(EPS_AUTH_SUCC) auth_succ,
sum(EPS_AUTH_SUCC+EPS_AUTH_FAIL_BY_UE+EPS_AUTH_REJECT_BY_MME) auth_att,
sum(EPS_AUTH_FAIL_BY_UE) fail_ue,
sum(EPS_AUTH_REJECT_BY_MME) fail_mme,
decode(nvl(sum(EPS_AUTH_SUCC+EPS_AUTH_FAIL_BY_UE+EPS_AUTH_REJECT_BY_MME),0),0,0,(round((sum(EPS_AUTH_SUCC)/sum(EPS_AUTH_SUCC+EPS_AUTH_FAIL_BY_UE+EPS_AUTH_REJECT_BY_MME)),4)*100)) auth_succ_rate
from 	PCOFNS_PS_SMLM_FLEXINS_RAW fourg,
	    PCOFNS_PS_S6A_FLEXINS_RAW b,  
		  UTP_COMMON_OBJECTS objects
where 
fourg.fins_ID=objects.co_gid and b.fins_id=objects.co_gid
and fourg.period_start_time=b.period_start_time
"""
else:
	sqlstring="""
select
fourg.fins_ID,
objects.co_Name MMESGSN,
to_char(fourg.period_start_time,'yyyy/mm/dd') Sdate,
to_char(fourg.period_start_time,'hh24:mi') Stime,
sum(S6A_UPDATE_LOCATION_REQ_SENT) ULR_REQ,
sum(S6A_UPDATE_LOCATION_ANS_RCV) ULR_SUCC,
decode(nvl(sum(S6A_UPDATE_LOCATION_REQ_SENT),0),0,0,round(sum(S6A_UPDATE_LOCATION_ANS_RCV)/sum(S6A_UPDATE_LOCATION_REQ_SENT)*100,2)) ulr_succ_rate,
sum(EPS_AUTH_SUCC) auth_succ,
sum(EPS_AUTH_SUCC+EPS_AUTH_FAIL_BY_UE+EPS_AUTH_REJECT_BY_MME) auth_att,
sum(EPS_AUTH_FAIL_BY_UE) fail_ue,
sum(EPS_AUTH_REJECT_BY_MME) fail_mme,
decode(nvl(sum(EPS_AUTH_SUCC+EPS_AUTH_FAIL_BY_UE+EPS_AUTH_REJECT_BY_MME),0),0,0,(round((sum(EPS_AUTH_SUCC)/sum(EPS_AUTH_SUCC+EPS_AUTH_FAIL_BY_UE+EPS_AUTH_REJECT_BY_MME)),4)*100)) auth_succ_rate
from 	PCOFNS_PS_SMLM_FLEXINS_RAW fourg,  
	    PCOFNS_PS_S6A_FLEXINS_RAW b,
		  UTP_COMMON_OBJECTS objects
where 
fourg.fins_ID=objects.co_gid and b.fins_id=objects.co_gid
and fourg.period_start_time=b.period_start_time
"""

#decode(nvl((sum(EPS_DEF_BEARER_ACT_SUCC+EPS_DEF_BEARER_ACT_FAIL)),0),0,0,(round((sum(EPS_DEF_BEARER_ACT_SUCC)/(sum(#EPS_DEF_BEARER_ACT_SUCC+EPS_DEF_BEARER_ACT_FAIL))),4)*100)) ActDefault_EPS_Bearer_SR,

if (selectmmesgsn<>'all'):
	sqlstring=sqlstring+" and objects.co_name= \'"+selectmmesgsn+"\' " 

sqlstringtime=" and to_char(fourg.period_start_time,\'yyyy/mm/dd/hh24\')>=\'"+startdate+"/"+starttime+"\' and to_char(fourg.period_start_time,\'yyyy/mm/dd/hh24\')<=\'"+stopdate+"/"+stoptime + "\' "

if (selectperiod=='60'):
	sqlstring1=""" 
	group by to_char(fourg.period_start_time,'yyyy/mm/dd'), to_char(fourg.period_start_time,'hh24'), fourg.fins_id, objects.co_name 
	order by objects.co_name,to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24')
	"""
else:
	sqlstring1="""
	group by to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24:mi'), fourg.fins_ID, objects.co_name 
	order by objects.CO_name,to_char(fourg.period_start_time,'yyyy/mm/dd'),to_char(fourg.period_start_time,'hh24:mi')
	"""
sqlstring=sqlstring+sqlstringtime+sqlstring1
#print sqlstring

cursor.execute(sqlstring)

row15=cursor.fetchall()
for x in row15:
	if (localsave==0):
		print "<Item>"
	elif localsave==1:
		reportfile.write("\n")
	for y in x:
		if (localsave==0):
			print "<ItemCol>"
			print "<value>"
			print y
			print "</value>"
			print "</ItemCol>"
		elif localsave==1:
			reportfile.write(str(y))
			reportfile.write(',')
	if (localsave==0):
		print "</Item>"
	
	
if (localsave==0):
	print "</location>"
elif localsave==1:
	reportfile.write("\n")

if (localsave==0):
	print "</response>"
elif localsave==1:
	reportfile.write("\n")

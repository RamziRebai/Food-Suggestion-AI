
uniqueGridId=`date +%s`
baseUrl='https://zfxvdyr2fb.execute-api.ap-southeast-2.amazonaws.com/Prod/'

curl -X POST --data-binary @image01.jpg "${baseUrl}addImage?uniqueGridId=${uniqueGridId}" 

curl -X POST --data-binary @image02.jpg "${baseUrl}addImage?uniqueGridId=${uniqueGridId}" 

curl -X POST --data-binary @image03.jpg "${baseUrl}addImage?uniqueGridId=${uniqueGridId}" 

curl -X POST --data-binary @image04.jpg "${baseUrl}addImage?uniqueGridId=${uniqueGridId}" 

curl -X POST --data-binary @image05.jpg "${baseUrl}addImage?uniqueGridId=${uniqueGridId}" 

curl -X POST --data-binary @image06.jpg "${baseUrl}addImage?uniqueGridId=${uniqueGridId}" 

curl -X POST --data-binary @image07.jpg "${baseUrl}addImage?uniqueGridId=${uniqueGridId}" 

curl -X POST --data-binary @image08.jpg "${baseUrl}addImage?uniqueGridId=${uniqueGridId}" 

curl -X POST --data-binary @image09.jpg "${baseUrl}addImage?uniqueGridId=${uniqueGridId}" 

curl -X POST --data-binary @image10.jpg "${baseUrl}addImage?uniqueGridId=${uniqueGridId}" 

curl -X POST --data-binary @image11.jpg "${baseUrl}addImage?uniqueGridId=${uniqueGridId}" 

curl -X POST --data-binary @image12.jpg "${baseUrl}addImage?uniqueGridId=${uniqueGridId}" 

curl -X POST --data-binary @image13.jpg "${baseUrl}addImage?uniqueGridId=${uniqueGridId}" 

curl -X POST --data-binary @image14.jpg "${baseUrl}addImage?uniqueGridId=${uniqueGridId}" 

curl -X POST --data-binary @image15.jpg "${baseUrl}addImage?uniqueGridId=${uniqueGridId}" 

curl -X POST --data-binary @image16.jpg "${baseUrl}addImage?uniqueGridId=${uniqueGridId}" 


curl -X POST  "${baseUrl}generateGrid?uniqueGridId=${uniqueGridId}" 



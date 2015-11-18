rm(list=ls())

###  Make long data
library(rjson)

##specify path to data you want to use:
data.path <- "../raw_data/test/"
demo.path <- "../demographics/test/"

#Load in data
files <- dir(data.path)

d <- data.frame()

for (f in files) {
  this.file <- read.csv(paste(data.path, f, sep=""), header=FALSE)
  names(this.file) <- c("subid","trial.num","item","item1","item2","word.type","image.type","choice.side","response","rt","date","time")
  d <- rbind(d, this.file)  
}

##Load in demo date
files <- dir(demo.path)

demo <- data.frame()
comments <- data.frame()

for (f in files) {
  this.file <- fromJSON(file = paste(demo.path, f, sep=""))
  subid <- this.file$WorkerId
  gender <- this.file$answers$gender
  age <- this.file$answers$age
  language <- this.file$answers$english
  comm <- this.file$answers$comments
  temp <- cbind(subid, gender, age, language)
  demo <- rbind(demo, temp)  
  temp.comment <- cbind(subid, comm)
  comments <- rbind(comments, temp.comment)
}

#view comments:
print(comments)

#Merge demo and data
d <- merge(d, demo)

d$subid <- as.factor(as.numeric(d$subid))

write.csv(d,  "../long_data/book-or_long_test.csv")



dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

words = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]



def substrings(word,dictionary)
  newWords = []
 
 dictionary.each {|str| 
 
if
    str.include?(word.downcase)

    newWords.push(str)
    result = Hash[newWords,newWords.size]
    pp result
     puts "the word #{word} is in the dictionary #{result.values.join.to_i } times"
end
  
  



  
   

   
  
  
  


 }
 
end

 substrings("i",dictionary)
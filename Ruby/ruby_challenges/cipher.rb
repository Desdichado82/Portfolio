 puts "What is your message for Ceasar? : "
  message = gets.chomp

  puts "Number please: "
  encrypt = gets.chomp.to_i

  def cipher(message,encrypt)
     pp alphabet = ('a'..'z').to_a
    key = Hash[alphabet.zip(alphabet.rotate(encrypt))]
    encryption = message.each_char.to_a.reduce(""){|acc,char|
    if char  =~ /[a-z]/
      acc + key[char]
  else
    acc + char
  end 
  }
  pp encryption 
  end 

  cipher(message,encrypt)
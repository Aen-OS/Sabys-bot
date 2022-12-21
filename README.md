# sabrine-s-bot
A cousin of mine needs to buy some shoes and they sell out quickly. I made a bot for this.


Let’s call the bot GUU (7th December - update: this is a stupid name, I called the bot ‘bot’)

One issue → I don’t have the page of when it’s in stock but there should be similar pages to detect that it’s in stock.

The target page is [UGG.com](http://UGG.com) (the french website)

Requirements:

- Know what product (and which colour) and which size is in stock and out of stock
- Send a notification (when IN STOCK) as quick as the first 10 seconds.
- Needs to take product name and size as input
    
    (within block structure - it needs to deliver IN STOCK or OUT OF STOCK as output)
    
This output needs to be fed into ‘send notification’ function that decides whether to alert sabrine or not (depending on whether it’s in stock or not, respectively)
    

The bot is able to poll a website every 5 seconds. However, we might want to get it to do it less to prevent being blocked (either every minute, 5 minutes, 10 minutes; because it’s only a shoe, one could do it every half hour or even an hour).

What would be even better is to have the boots be bought immediately once in stock. 

A function to look at a single webpage and see if the shoe, in a specific size and colour, is in stock (DONE)

A function to send notification to sabrine’s email if IN STOCK. (NOT STARTED)

A function to checkout the boots (DONE)

A function to notify if boots were successfully bought or not, SUCCESS or FAIL (NOT STARTED)

Update 19 Dec 2022

Right now everything works great, but if the bot runs up to 4 times, it gets essentially shadow-banned (it’s not blocked from the page but it’s blocked from doing actions like selecting size or adding the product to cart)

All that’s left is to look into getting a proxy involved and find a way to get the bot to check if the product is in stock without getting banned.

VMs are perfect for this, as specific IPs seem to get banned. The bot worked before but now doesn’t work at all on my fedora, and still doesn’t work; bans aren’t temporary (but using the bot inside of a vm worked so it could just be that windows is easier to deal with than linux, i’m not sure). So with a proxy I’ll be safeguarding the VM ip.

so what I want the bot to do now is just check if the product is available in a specific colour and specific size then notify Sabrine (via email). That’s the first objective.



name= "Kevin"
last = "Cabrera"

print(name)

## list
prices = [12, 32, 45.00, 43.23, 45.03]
print (prices)

print (prices[0])

# 'for loop' in python. 

total = 0
for price in prices:
    # print(price)
    total += price

print (total)


## dictionary (key value per list)
me = {
    "name": "Kevin",
    "last": "Cabrera",
    "age": 32
}

print(me)

# read
print(me["name"])

# modify
me["age"] = 99

# add
me["email"] = "kcabrera913@gmail.com"

print(me)

# to prevent from crashing
# option 1 - Check
if "hobbies" in me:
    hobbies = me["hobbies"]
    print(hobbies)

# option 2 - read or default
hob2 = me.get("hobbies","NO HOBBIES")
print(hob2)


print("Should work")
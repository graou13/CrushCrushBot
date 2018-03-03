# CrushCrushBot
Discord bot for the Crush Crush server

arguments can be (list, of ,multiple) or single_one

channels definition are id or name, '!' mean NOT: (channel, 1234567 ,!1234567 , !notchannel5)
weight definition is (negative numbers not allowed atm): 1, 0.2, light (0.5), normal (1), bad (2)
expressions can be /regexes/ or words
numbers can be either a full number or 'all'

$list
$top [number]
$info user
$bl channel expressions
$wl channel expressions
$che ruleid expression
$chw ruleid weight
$chc ruleid channel
$chwc channel
$addc ruleid channel
$delc ruleid channel
$delr ruleid
$delo offenceid
$clrc channel
$clru user

options (bl and wl):
-s        = silent (not posting in warnings, need admin permission to work)
-w weight = weight (how bad is it? default 1)
options (info):
-l        = long (display their entire messages and not just the offensive part)
-n number = number (number of offenses to display, default all)
option (list):
-c = creator (also display the rule's creator)

all cmds require the moderator role except those marked as "need admin" who need either the administrator or the owner role

$list = list all rules along with their id grouped per channels
$top  = display top most offensive users along with their id, score, and number of offences. default to 10.
$info = display a user's offenses along with the offence's id. if more than 5 offenses are to be displayed and no number option was set, ask confirmation first (avoid spam)
$bl   = blacklist (if a message fit the expression, it's a warning)
$wl   = whitelist (if a message doesn't fit the expression, it's a warning)
$che  = change rule's expression
$chw  = change rule's weight
$chc  = change rule's channel(s)
$chwc = change warnings/log channel (need admin)
$addc = add channel(s) to rules
$delc = remove channel(s) from rule. if a rule doesn't have a channel anymore it is removed
$delr = delete rule
$delo = delete offence
$clrc = clear all channel's rules (need admin)
$clru = clear all offences from user (need admin)

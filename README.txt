Copyright (C) 2022 Sam Pickell

This is my coding sample for the DecisionPoint interview process. The work
in this repository, with the exception of Chart.js, Papa Parse, and some
assistance noted in a comment, are my own. Chart.js and Papa Parse are both
licensed under the MIT license, which allows for the commercial and private use,
distribution, and modification of the software. In my case, it is just the use
of the software. The min version of Papa Parse is included in this repo as a
resource, and Chart.js is used with an ajax call.

To run, simply extract the "DecisionPoint-Challenge" repo (if zipped),
navigate to the root of the directory, and double click on the
"HelloCrypto.html" file. The main page will launch in your default browser.
You may then chose the provided csv file (also located in 
DecisionPoint-Challenge/Resources), and click "submit". From there, a
line chart will appear that displays the various crypto currency datasets
from the csv. You can mouse over any datapoint to get more specific
information for that date.

One improvement I would add if I had unlimited time to work on this would be
to make the code flexible enough to work with any number of different
currencies. It would require me to get a little more familiar with the
specifics of Chart.js to be able dynamically add datasets, as for right now,
the code is set up to handle four datasets.

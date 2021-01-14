const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
const phones = [
    {
        "id": 0,
        "name": "iPhone 10",
        "manufacturer": "Apple",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "color": "red",
        "price": 769,
        "imgUrl": "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78287897/fee_325_225_png/Apple-iPhone-12--Rojo--128-GB--5G--6.1%22-OLED-Super-Retina-XDR--Chip-A14-Bionic--iOS--%28PRODUCT%29RED%E2%84%A2",
        "screen": "4,9 inch IPS",
        "processor": "A10 Fusion",
        "ram": 3,
        "extraInfo": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id": 1,
        "name": "iPhone 11",
        "manufacturer": "Apple",
        "description": "Sed ut perspiciatis unde omnis iste natus error",
        "color": "green",
        "price": 900,
        "imgUrl": "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78289303/fee_240_148_png/Apple-iPhone-12--Verde--64-GB--5G--6.1%22-OLED-Super-Retina-XDR--Chip-A14-Bionic--iOS",
        "screen": "4,7 inch IPS",
        "processor": "A10 Fusion",
        "ram": 2,
        "extraInfo": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    {
        "id": 2,
        "name": "iPhone 12",
        "manufacturer": "Apple",
        "description": "At vero eos et accusamus et iusto odio dignissimos ducimus",
        "color": "white",
        "price": 1009,
        "imgUrl": "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78287785/fee_325_225_png/Apple-iPhone-12--Blanco--64-GB--5G--6.1%22-OLED-Super-Retina-XDR--Chip-A14-Bionic--iOS",
        "screen": "5,8 inch IPS",
        "processor": "A14 Bionic with Neural Engine",
        "ram": 4,
        "extraInfo": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    },
    {
        "id": 3,
        "name": "iPhone 12",
        "manufacturer": "Apple",
        "description": "Curabitur convallis est vel lectus consectetur, in egestas nisi congue.",
        "color": "white",
        "price": 1009,
        "imgUrl": "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78287785/fee_325_225_png/Apple-iPhone-12--Blanco--64-GB--5G--6.1%22-OLED-Super-Retina-XDR--Chip-A14-Bionic--iOS",
        "screen": "5,8 inch IPS",
        "processor": "A14 Bionic with Neural Engine",
        "ram": 4,
        "extraInfo": "Curabitur convallis est vel lectus consectetur, in egestas nisi congue. Donec vel hendrerit est. Aliquam egestas neque pulvinar, consequat ligula id, elementum nulla. Curabitur laoreet dolor arcu, quis molestie orci viverra in. Curabitur bibendum ex non diam laoreet suscipit. Ut a tortor eu diam maximus blandit vitae vel nisi. Praesent consectetur commodo lorem. Sed venenatis, diam ac gravida auctor, eros lacus vestibulum nulla, a faucibus enim purus id eros. Suspendisse vel leo et mi feugiat varius vitae nec odio. Proin molestie commodo sem, nec tempor neque bibendum et. Sed nec maximus augue, dapibus pellentesque dui. Ut fringilla egestas dui, sit amet euismod eros imperdiet eu."
    },
    {
        "id": 4,
        "name": "iPhone 12",
        "manufacturer": "Apple",
        "description": "Sed leo mi, rutrum quis tempus eget, finibus eget sem.",
        "color": "blue",
        "price": 938,
        "imgUrl": "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78288720/fee_240_148_png/Apple-iPhone-12--Azul--256-GB--5G--6.1%22-OLED-Super-Retina-XDR--Chip-A14-Bionic--iOS",
        "screen": "5,8 inch IPS",
        "processor": "A14 Bionic with Neural Engine",
        "ram": 4,
        "extraInfo": "Sed leo mi, rutrum quis tempus eget, finibus eget sem. Fusce ac pulvinar nulla, pharetra bibendum urna. Aenean placerat non tortor vel dictum. Pellentesque iaculis, elit eu efficitur elementum, diam ante eleifend ex, ac molestie risus nibh nec nibh. Donec vehicula vulputate mauris, sed condimentum lorem dignissim et. Etiam vestibulum vestibulum elit et ornare. Nunc blandit felis quis felis tincidunt, sit amet interdum lectus euismod. Nam ligula orci, sodales ut nisi sed, volutpat accumsan orci. Nulla molestie augue sed iaculis consequat. Sed scelerisque sem vel arcu semper, quis tincidunt dui tristique. Nam neque tortor, dapibus a viverra nec, aliquet in nisl. Vivamus a libero et nunc mollis pellentesque et eu nulla. Aliquam porta enim vel tortor blandit rutrum. Nam facilisis porta fringilla. Suspendisse hendrerit at magna in bibendum. Donec maximus ligula a dolor venenatis venenatis."
    },
    {
        "id": 5,
        "name": "iPhone 12",
        "manufacturer": "Apple",
        "description": "Donec id fermentum nibh.",
        "color": "white",
        "price": 1009,
        "imgUrl": "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78287785/fee_325_225_png/Apple-iPhone-12--Blanco--64-GB--5G--6.1%22-OLED-Super-Retina-XDR--Chip-A14-Bionic--iOS",
        "screen": "5,8 inch IPS",
        "processor": "A14 Bionic with Neural Engine",
        "ram": 4,
        "extraInfo": "Donec id fermentum nibh. Duis euismod, libero non sollicitudin mattis, nunc orci convallis augue, non ultricies neque lacus et sem. Pellentesque pharetra urna in blandit elementum. Cras vitae convallis ipsum, et convallis arcu. Sed mollis felis nunc, in dapibus libero pretium ac. Integer egestas ex ut nisl condimentum blandit. Aenean fringilla ullamcorper elit, quis scelerisque est vestibulum congue. Duis eget ante vulputate, fringilla urna quis, tempus risus. Vestibulum eget lorem ultrices, bibendum turpis a, hendrerit orci. Cras sollicitudin mauris in posuere facilisis. Curabitur a vehicula velit, id suscipit orci. Proin vehicula tempor nibh sed mollis."
    }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/phones', (req, res) => {
    // Timeout included to simulate API delayed response
    setTimeout(function() {
        res.send(phones);
    }, 5000);
});


app.listen(port, () => console.log(`Listening on port ${port}`));
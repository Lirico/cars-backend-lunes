


const checkCarTypes = (request, response, next) => {
    const car = request.body

    const arrayOfValidation = [];

    if(typeof car.brand !== "string") arrayOfValidation.push("Brand debe ser un string");
    if(typeof car.price !== "number") arrayOfValidation.push("Price debe ser un number");
    if(typeof car.model !== "string") arrayOfValidation.push("Model debe ser un string");
    if(typeof car.year !== "number") arrayOfValidation.push("Year debe ser un number");

    if(arrayOfValidation.length > 0){
        return response.json({
            statusCode: 400,
            message: "Revisa el objeto que mandas wachin!",
            arrayOfValidation
        })
    }

    next();
}

module.exports = checkCarTypes;
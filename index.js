const driver = {}

function updateDriverWithKeyAndValue(driver, key, value)    {
    newObj = Object.assign({},driver, {[key]: value})
    return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value)   {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key) {
    clone = Object.assign({}, driver)
    delete clone[key]
    return clone
}

function destructivelyDeleteFromDriverByKey(driver, key)    {
    delete driver[key]
    return driver
}
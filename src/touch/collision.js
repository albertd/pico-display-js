export default (event, template) => {
    // take elements from the template and compare their coordinates with the event coordinates
    // if the event coordinates are within the element coordinates, return the element name
    // if the event coordinates are not within the element coordinates, return null
    if (!event) {
        return null;
    }

    if (!template) {
        return null;
    }

    const elements = Object.keys(template).filter((key) => {
        let element = template[key];

        // cant check if element has no coordinates
        if (!element || element.x === undefined || element.y === undefined || element.w === undefined || element.h === undefined) {
            return false;
        }

        if (event.x >= element.x && event.x <= element.x + element.w && event.y >= element.y && event.y <= element.y + element.h) {
            return true;
        }

        return false;
    });

    // return the last element in the array (the one on top)
    return elements[elements.length - 1] || null;
}

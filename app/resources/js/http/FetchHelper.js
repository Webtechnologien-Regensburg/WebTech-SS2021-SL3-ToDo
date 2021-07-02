/* eslint-env browser */

// Hilfsklasse zum Durchführen von HTTP-Anfragen über die Fetch-API
class FetchHelper {
    /**
     * Führt eine HTTP-Anfrage aus und übergibt die Serverantwort als Parameter an die übergebene Callback-Methode.
     *
     * Parameter:
     *   url: Ziel der Anfrage
     *   method: HTTP-Verb, z.B. GET, PUT, POST
     *   jsonData: Javascript-Objekt, dass als JSON-String an den Server geschickt werden soll
     *   callback: Methode, der nach erfolgreicher Anfrage die Antwort des Servers übergeben werden soll
     *
     * Beispiel:
     *   FetchHelper.makeRequest(API_URL_TASKS, "GET", null, function(result) {
     *      console.log(result); // Ausgabe der vom Server erhaltenen Antwort
     *   });
     */
    static async makeRequest(url, method, data, callback) {
        let response,
            result,
            options = {
                method: method,
            };
        if (method !== "HEAD" && method !== "GET") {
            options.body = JSON.stringify(data);
        }
        response = await fetch(url, options);
        result = await response.json();
        callback(result);
    }
}

export default FetchHelper;

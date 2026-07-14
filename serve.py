import http.server
import functools

DIRECTORY = "/Users/nerdherder/Downloads/impossible-commute-filmmaker-kit_select-filmmakers/showcase"
handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=DIRECTORY)
http.server.test(HandlerClass=handler, port=8743)

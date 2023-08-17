<?php
    function run(string $url, array $routes):void {
        $uri = parse_url($url);
        $path = $uri['path'];
        if(false === array_key_exists($path, $routes)) {
            return;
        }
        $callback = $routes[$path];
        
        $callback();
    }
?>
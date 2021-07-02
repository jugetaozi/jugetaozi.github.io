$(function () {
    /* ---- particles.js config ---- */
    particlesJS("particles-after-filter", {
        "particles": {
            "number": {
                "value": 22,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 8,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 4,
                "direction": "top-right",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 119.88011988011988,
                    "line_linked": {
                        "opacity": 0.2509491544632522
                    }
                },
                "bubble": {
                    "distance": 292.34779642848423,
                    "size": 5,
                    "duration": 1.3805312609122866,
                    "opacity": 0.4,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    particlesJS("particles", {
        "particles": {
            "number": {
                "value": 65,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 4,
                "direction": "top-right",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 119.88011988011988,
                    "line_linked": {
                        "opacity": 0.2509491544632522
                    }
                },
                "bubble": {
                    "distance": 292.34779642848423,
                    "size": 5,
                    "duration": 1.3805312609122866,
                    "opacity": 0.4,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // 签名

    // 播放器
    ;
    (function (window) {
        var playStart = null;
        var playIncetance
        $('#musicSwitch').on('click', function () {
            $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');
            // 点击播放
            if (!$('#skPlayer').find('audio').length) {
                var player = new skPlayer({
                    autoplay: true,
                    music: {
                        type: 'cloud',
                        source: 896988384
                    }
                });
                playIncetance = player
            }
            clearTimeout(playStart);
        });
        //第一次进入的时候模拟点击
        var sessionSave = window.sessionStorage.getItem('playSessionSave')
        if (sessionSave && (sessionSave !== window.location.pathname)) {
            //     //如果访问过并且路径不相等  则延缓加载
            playStart = setTimeout(function () {
                var Arr = [1, 2, 3, 4];
                var index = Math.floor(Math.random() * Arr.length + 1) - 1;
                console.log(index);
                $('#musicSwitch').trigger('click');
                playStart = setTimeout(function () {
                    $('#musicSwitch').trigger('click');
                    playIncetance.switchMusic(Arr[index]);
                }, 2000)
            }, 4000)
        } else {
            //第一次访问 立马加载
            $('#musicSwitch').trigger('click');
            playStart = setTimeout(function () {
                $('#musicSwitch').trigger('click');
            }, 5000)
        }
    }(window));


    // 图片延迟加载
    $("img.lazy").unveil(1000);
    $('.post-listing').scroll(function () {
        $(window).trigger('scroll');
    });

    // 返回按钮
    $('a', '.back-home').on('click', function () {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = 'https://www.jugetaozi.github.io';
        }
    });

    //运行时间计时
    (function () {
        var birthday = new Date(2016, 7, 17);
        running();
        setInterval(running, 1000);

        function running() {
            var today = new Date();
            var delta = parseInt(today - birthday);
            var DD = Math.floor(delta / 86400000);
            var HH = Math.floor(delta % 86400000 / (1000 * 3600));
            var MM = Math.floor(delta % 86400000 % (1000 * 3600) / (1000 * 60));
            var SS = Math.floor(delta % 86400000 % (1000 * 3600) % (1000 * 60) / 1000);
            $("#runningTime").text(DD + '天' + HH + '小时' + MM + '分' + SS + '秒');
        }
    }())

    //记住当前pathname
    window.sessionStorage.setItem('playSessionSave', window.location.pathname);
});
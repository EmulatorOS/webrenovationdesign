// Auteur du d�veloppement : Herve Augoyat www.ah-book.com
// Copie ou modification interdite sans accord de l'auteur
function GLOBAL() {
    if ($("load") != null && $("load") != undefined) {
        var b = $("load");
        $(b).set("morph", {
            duration: 400,
            transition: Fx.Transitions.Quart.easeOut
        });
        $(b).morph({
            opacity: "0"
        });
        (function() {
            $(b).setStyle("display", "none")
        }
        ).delay(400);
        $(document.body).setStyles({
            overflow: "visible"
        })
    }
    var n = window.getSize().x;
    var m = window.getSize().y;
    var l = "non";
    if ($("menuMob") != null && $("menuMob") != undefined) {
        var e = $("menuMob");
        var g = $(e).getStyle("display");
        if (g != "none") {
            l = "oui"
        }
    }
    var d;
    function q() {
        clearTimeout(d);
        d = (function() {
            if (n != window.getSize().x) {
                window.location.reload(true)
            }
        }
        ).delay(500)
    }
    (function() {
        $(window).addEvent("resize", q)
    }
    ).delay(100);
    function p(u, t, v) {
        $(u).setStyle("opacity", "0");
        $(u).setStyle("visibility", "visible");
        (function() {
            $(u).set("morph", {
                duration: t,
                transition: Fx.Transitions.Quart.easeInOut
            });
            $(u).morph({
                opacity: "1"
            })
        }
        ).delay(v)
    }
    function r(u, t, v) {
        $(u).setStyle("opacity", "0");
        $(u).setStyle("display", "block");
        (function() {
            $(u).set("morph", {
                duration: t,
                transition: Fx.Transitions.Quart.easeOut
            });
            $(u).morph({
                opacity: "1"
            })
        }
        ).delay(v)
    }
    TweenLite.defaultEase = Power3.easeOut;
    if ($("contenucui") != null && $("contenucui") != undefined) {
        var s = new TimelineLite();
        var c = $("contenucui");
        var k = $$("#contenucui h1")[0];
        var h = $$("#contenucui h2")[0];
        var f = $$("#contenucui p")[0];
        s.to(c, 3, {
            autoAlpha: 1
        }, 0.1);
        s.from(k, 0.5, {
            opacity: 0,
            y: 50
        }, 0.2);
        s.from(h, 0.55, {
            opacity: 0,
            y: 60
        }, 0.3);
        s.from(f, 0.6, {
            opacity: 0,
            y: 80
        }, 0.4);
        var a = $$(".biglien")[0];
        var o = $(a).getSize().y;
        $(a).addEvent("mouseenter", function() {
            var u = $(this).getChildren("i");
            TweenLite.to(u[0], 0.4, {
                y: -o
            });
            var t = $(this).getChildren("span");
            TweenLite.to(t, 0.4, {
                backgroundPosition: "95% 50%"
            })
        });
        $(a).addEvent("mouseleave", function() {
            var u = $(this).getChildren("i");
            TweenLite.to(u[0], 0.4, {
                y: 0
            });
            var t = $(this).getChildren("span");
            TweenLite.to(t, 0.4, {
                backgroundPosition: "92% 50%"
            })
        })
    }
    (function() {
        if (l != "oui") {
            var t = $("logoB");
            var J = $$("#logoB img")[0];
            var G = $$("#logoB img")[1];
            var bv = $$("#logoB i")[0];
            var w = $(t).getSize().y;
            var af = $(t).getSize().x;
            var by = new TimelineLite();
            if ($("galerieAccueil") != null && $("galerieAccueil") != undefined) {
                by.set(t, {
                    visibility: "visible"
                }).from(J, 1.3, {
                    y: w + 4,
                    rotationZ: 0,
                    force3D: false,
                    ease: Power4.easeInOut
                }, 0.2).from(G, 1.2, {
                    y: w + 4,
                    rotationZ: 0,
                    force3D: false,
                    ease: Power4.easeInOut
                }, 0.35)
            } else {
                by.set(t, {
                    visibility: "visible"
                }).from(J, 1.3, {
                    y: w + 4,
                    rotationZ: 0,
                    force3D: false,
                    ease: Power4.easeInOut
                }, 0.02).from(G, 1.2, {
                    y: w + 4,
                    rotationZ: 0,
                    force3D: false,
                    ease: Power4.easeInOut
                }, 0.15)
            }
            TweenLite.set(bv, {
                visibility: "visible"
            });
            (function() {
                var Z = new TimelineLite();
                nbsurvolLogo = 0;
                $(t).addEvent("mouseenter", function() {
                    if (nbsurvolLogo == 0) {
                        nbsurvolLogo = 1;
                        Z.set(bv, {
                            width: 0,
                            x: 0
                        });
                        Z.to(bv, 0.4, {
                            opacity: 0.2,
                            width: af
                        });
                        Z.to(bv, 0.4, {
                            opacity: 1,
                            x: af,
                            width: 0
                        }, "+=0.05");
                        setTimeout(function() {
                            nbsurvolLogo = 0
                        }, 950)
                    }
                })
            }
            ).delay(1000);
            var bC = new TimelineLite();
            var aw = $("menuext");
            var U = $("menu");
            var ak = $$("#menu i");
            var ap = $$("#menu b")[0];
            var V = $$("#menuext span")[0];
            bC.set(aw, {
                visibility: "visible"
            }).from(U, 0.8, {
                y: 40,
                opacity: 0,
                ease: Power3.easeOut
            }, 1.3).staggerFrom(ak, 0.6, {
                y: 20,
                opacity: 0,
                ease: Power4.easeOut
            }, 0.03, 1.4).from(V, 0.8, {
                y: 30,
                opacity: 0,
                ease: Power3.easeOut
            }, 1.8);
            TweenLite.set(ap, {
                scaleX: 0,
                scaleY: 0,
                opacity: 0
            });
            $(aw).addEvent("mouseenter", function() {
                TweenLite.to(U, 0.5, {
                    backgroundColor: "#fff",
                    ease: Power4.easeOut
                });
                TweenLite.set(ap, {
                    scaleX: 0,
                    scaleY: 0,
                    opacity: 0
                });
                TweenLite.to(ap, 0.6, {
                    scaleX: 1.2,
                    scaleY: 1.2,
                    opacity: 1,
                    ease: Power2.easeOut
                })
            });
            $(aw).addEvent("mouseleave", function() {
                TweenLite.to(U, 0.3, {
                    backgroundColor: "#000",
                    ease: Power4.easeOut
                });
                TweenLite.to(ap, 1.2, {
                    scaleX: 1.9,
                    scaleY: 1.9,
                    opacity: 0,
                    ease: Power4.easeOut
                })
            });
            var aT = $$("#sociaux a");
            bC.staggerFrom(aT, 0.8, {
                y: 40,
                autoAlpha: 0,
                ease: Power4.easeOut
            }, 0.07, 1.5);
            for (i = 0; i < aT.length; i++) {
                $(aT[i]).addEvent("mouseenter", function() {
                    TweenLite.to($(this), 0.4, {
                        y: -7,
                        opacity: 0.5
                    })
                });
                $(aT[i]).addEvent("mouseleave", function() {
                    TweenLite.to($(this), 0.4, {
                        y: 0,
                        opacity: 1
                    })
                })
            }
            var N = $("navigation");
            var ba = $("coord");
            var T = $("navint");
            var bb = $$("#navint ul")[0];
            var aU = $$("#navint a");
            var W = $$("#coord i")[0];
            var I = new TimelineLite();
            I.set(aU, {
                y: 50,
                opacity: 0
            });
            clicnav = 0;
            clicnavouvert = "oui";
            $(aw).addEvent("click", function() {
                if (clicnav == 0 && clicnavouvert == "oui") {
                    clicnav = 1;
                    clicnavouvert = "non";
                    I.set(navigation, {
                        display: "block",
                        opacity: 0
                    });
                    var bI = $(ba).getSize().y;
                    var Z = $(bb).getSize().y;
                    $(ba).setStyle("margin-top", -(bI / 2) + "px");
                    $(bb).setStyle("margin-top", -(Z / 2) + "px");
                    I.to(navigation, 1, {
                        opacity: 1
                    }).staggerTo(aU, 1, {
                        y: 0,
                        opacity: 1,
                        ease: Power4.easeOut
                    }, 0.05, "-=0.8").to(W, 1, {
                        height: bI,
                        marginTop: -bI / 2,
                        ease: Power4.easeOut
                    }, "-=1");
                    largeurMenui = $(ak[0]).getSize().x;
                    TweenLite.to(ak[0], 0.6, {
                        width: 0
                    });
                    TweenLite.to(ak[1], 0.9, {
                        rotation: 90
                    });
                    TweenLite.to(ak[2], 0.6, {
                        width: 0
                    });
                    setTimeout(function() {
                        clicnavouvert = "oui"
                    }, 1050)
                }
                if (clicnav == 1 && clicnavouvert == "oui") {
                    clicnav = 0;
                    clicnavouvert = "non";
                    I.staggerTo(aU, 0.7, {
                        y: 50,
                        opacity: 0,
                        ease: Power4.easeOut
                    }, 0.04).to(W, 1, {
                        height: 0,
                        marginTop: 0,
                        ease: Power4.easeOut
                    }, "-=0.8").to(navigation, 0.8, {
                        opacity: 0
                    }, "-=0.8");
                    TweenLite.to(ak[0], 0.4, {
                        width: largeurMenui
                    });
                    TweenLite.to(ak[1], 0.5, {
                        rotation: 0
                    });
                    TweenLite.to(ak[2], 0.4, {
                        width: largeurMenui
                    });
                    setTimeout(function() {
                        I.set(navigation, {
                            display: "none"
                        });
                        clicnavouvert = "oui"
                    }, 1050)
                }
            });
            for (i = 0; i < aU.length; i++) {
                $(aU[i]).addEvent("mouseenter", function() {
                    if ($(this).get("id") != "mactif") {
                        TweenLite.to(this, 0.5, {
                            backgroundPosition: "12px 50%",
                            x: 7
                        });
                        var bJ = $(this).getChildren("span");
                        var Z = $(bJ[0]).getSize().x;
                        var bI = $(bJ[0]).getChildren("i");
                        TweenLite.set(bI[0], {
                            visibility: "visible"
                        });
                        TweenLite.to(bI[0], 0.9, {
                            width: Z
                        })
                    }
                });
                $(aU[i]).addEvent("mouseleave", function() {
                    if ($(this).get("id") != "mactif") {
                        TweenLite.to(this, 0.5, {
                            backgroundPosition: "0px 50%",
                            x: 0
                        });
                        var bJ = $(this).getChildren("span");
                        var Z = $(bJ[0]).getSize().x;
                        var bI = $(bJ[0]).getChildren("i");
                        TweenLite.to(bI[0], 0.7, {
                            width: 0
                        })
                    }
                })
            }
            if ($("galerieAccueil") != null && $("galerieAccueil") != undefined) {
                var bc = $("galerieAccueil");
                var az = $("prem");
                var Y = $$("#galerieAccueil img");
                var A = $(az).getSize().y;
                var aI = $(az).getSize().x;
                var F = aI / A;
                var a5 = $(bc).getSize().y;
                var aj = $(bc).getSize().x;
                var aJ = aj / a5;
                if (F < aJ) {
                    $(az).setStyle("width", aj + "px");
                    $(az).setStyle("margin-left", "-" + aj / 2 + "px");
                    $(az).setStyle("height", aj / F + "px");
                    $(az).setStyle("margin-top", "-" + aj / (F * 2) + "px");
                    largeurImagesgalerieAccueil = aj;
                    hauteurImagesgalerieAccueil = aj / F
                } else {
                    $(az).setStyle("height", a5 + "px");
                    $(az).setStyle("margin-top", "-" + a5 / 2 + "px");
                    $(az).setStyle("width", a5 * F + "px");
                    $(az).setStyle("margin-left", "-" + a5 * F / 2 + "px");
                    largeurImagesgalerieAccueil = a5 * F;
                    hauteurImagesgalerieAccueil = a5
                }
                for (i = 1; i < Y.length; i++) {
                    $(Y[i]).setStyle("width", largeurImagesgalerieAccueil + "px");
                    $(Y[i]).setStyle("margin-left", "-" + largeurImagesgalerieAccueil / 2 + "px");
                    $(Y[i]).setStyle("height", hauteurImagesgalerieAccueil + "px");
                    $(Y[i]).setStyle("margin-top", "-" + hauteurImagesgalerieAccueil / 2 + "px");
                    $(Y[i]).setStyles({
                        opacity: "0",
                        visibility: "visible"
                    })
                }
                var bG = $("bandeC");
                var aW = new TimelineLite();
                aW.to(bG, 1.5, {
                    height: 0,
                    rotationZ: 0,
                    force3D: false,
                    ease: Power4.easeOut
                }, 0.5).from(az, 1.5, {
                    scaleX: 1.3,
                    scaleY: 1.3,
                    rotationZ: 0,
                    force3D: false,
                    ease: Power2.easeOut
                }, 0.5);
                NBimagesdiapo = Y.length;
                IDimage = 0;
                var at = 3200;
                var ax;
                var bs = function() {
                    TweenLite.to(Y[IDimage], 0.8, {
                        opacity: 0,
                        rotationZ: 0,
                        force3D: false,
                        ease: Power3.easeOut
                    });
                    if (IDimage == NBimagesdiapo - 1) {
                        IDimage = 0
                    } else {
                        IDimage = IDimage + 1
                    }
                    TweenLite.to(Y[IDimage], 0.8, {
                        opacity: 1,
                        rotationZ: 0,
                        force3D: false,
                        ease: Power3.easeOut
                    })
                };
                (function() {
                    lancediapoAccueil = bs.periodical(at)
                }
                ).delay(800);
                var a3 = $("fleche");
                TweenLite.set(a3, {
                    display: "block",
                    x: -40,
                    opacity: 0
                });
                TweenLite.to(a3, 0.8, {
                    delay: 1.9,
                    x: 0,
                    opacity: 1,
                    ease: Power4.easeOut
                });
                (function() {
                    nbclick = 0;
                    $(a3).addEvent("click", function() {
                        if (nbclick == 0) {
                            clearInterval(lancediapoAccueil);
                            bs();
                            nbclick++;
                            setTimeout(function() {
                                nbclick = 0
                            }, 800)
                        }
                    });
                    $(a3).addEvent("mouseenter", function() {
                        TweenLite.to(a3, 0.6, {
                            opacity: 0.4,
                            scaleX: 1.35,
                            scaleY: 1.35,
                            ease: Power4.easeOut
                        })
                    });
                    $(a3).addEvent("mouseleave", function() {
                        TweenLite.to(a3, 0.5, {
                            opacity: 1,
                            scaleX: 1,
                            scaleY: 1,
                            ease: Power4.easeOut
                        })
                    })
                }
                ).delay(1500);
                var av = $("intro");
                TweenLite.set(av, {
                    width: aj / 2,
                    visibility: "visible",
                    opacity: 0,
                    y: 150
                });
                TweenLite.to(av, 1, {
                    delay: 2,
                    y: 0,
                    opacity: 1,
                    ease: Power4.easeOut
                });
                var a9 = $$(".suite")[0];
                var ah = $$(".suite b")[0];
                var X = $$(".suite i")[0];
                var aE = $(X).getSize().x;
                var br = new TimelineLite();
                $(a9).addEvent("mouseenter", function() {
                    TweenLite.to(a9, 0.4, {
                        opacity: 0.9,
                        backgroundPosition: "8px 50%"
                    }, 0.1);
                    br.to(ah, 0.3, {
                        x: aE,
                        width: 0,
                        opacity: 0.5
                    });
                    br.set(ah, {
                        x: 0,
                        width: 0,
                        opacity: 0.5,
                        ease: Power4.easeOut
                    }, "+=0.05");
                    br.to(ah, 0.6, {
                        width: aE,
                        opacity: 1
                    }, "+=0.05")
                });
                $(a9).addEvent("mouseleave", function() {
                    TweenLite.to(a9, 0.4, {
                        opacity: 1,
                        backgroundPosition: "0px 50%"
                    }, 0.5)
                });
                var bH = $("contenu").getPosition().y;
                $(a9).addEvent("click", function() {
                    TweenLite.to(window, 1, {
                        scrollTo: {
                            y: bH
                        }
                    })
                });
                posscroll = ($(window).getScroll().y).toInt();
                ScrollIntro = function() {
                    posscroll = ($(this).getScroll().y).toInt();
                    Modifopacite = 1 - ((posscroll - (m / 2)) / (m / 2));
                    Modifopacite = Modifopacite.toFixed(2);
                    ModifopaciteFleche = 1 - (posscroll / (m / 2));
                    ModifopaciteFleche = ModifopaciteFleche.toFixed(2);
                    TweenLite.set(av, {
                        marginBottom: posscroll,
                        opacity: Modifopacite
                    });
                    TweenLite.set(bc, {
                        y: -(posscroll * 0.15).toFixed(2),
                        opacity: Modifopacite
                    });
                    TweenLite.set(a3, {
                        opacity: ModifopaciteFleche
                    })
                }
                ;
                if (posscroll != 0) {
                    ScrollIntro()
                }
                $(window).addEvent("scroll", ScrollIntro);
                var bn = $("vignette1");
                var S = $(bn).getPosition().y.toFixed(2);
                var bm = $("vignette2");
                var R = $(bm).getPosition().y.toFixed(2);
                var bk = $("vignette3");
                var Q = $(bk).getPosition().y.toFixed(2);
                var bj = $("vignette4");
                var O = $(bj).getPosition().y.toFixed(2);
                var bi = $("vignette5");
                var M = $(bi).getPosition().y.toFixed(2);
                posscrollV = ($(window).getScroll().y).toInt();
                ScrollValeurs = function() {
                    posscrollV = ($(this).getScroll().y).toInt();
                    limitebas = posscrollV + m;
                    ModifyvignetteY = (limitebas - S) / (m) * (m / 4);
                    ModifyvignetteY = ModifyvignetteY.toFixed(2);
                    ModifyvignetteO = (limitebas - S) / (m / 3);
                    ModifyvignetteO = ModifyvignetteO.toFixed(2);
                    TweenLite.set(bn, {
                        y: -ModifyvignetteY,
                        opacity: ModifyvignetteO
                    });
                    Modifyvignette2Y = (limitebas - R) / (m) * (m / 4);
                    Modifyvignette2Y = Modifyvignette2Y.toFixed(2);
                    Modifyvignette2O = (limitebas - R) / (m / 3);
                    Modifyvignette2O = Modifyvignette2O.toFixed(2);
                    TweenLite.set(bm, {
                        y: -Modifyvignette2Y,
                        opacity: Modifyvignette2O
                    });
                    Modifyvignette3Y = (limitebas - Q) / (m) * (m / 2);
                    Modifyvignette3Y = Modifyvignette3Y.toFixed(2);
                    Modifyvignette3O = (limitebas - Q) / (m / 4);
                    Modifyvignette3O = Modifyvignette3O.toFixed(2);
                    TweenLite.set(bk, {
                        y: -Modifyvignette3Y,
                        opacity: Modifyvignette3O
                    });
                    Modifyvignette4Y = (limitebas - O) / (m) * (m / 2);
                    Modifyvignette4Y = Modifyvignette4Y.toFixed(2);
                    Modifyvignette4O = (limitebas - O) / (m / 4);
                    Modifyvignette4O = Modifyvignette4O.toFixed(2);
                    TweenLite.set(bj, {
                        y: -Modifyvignette4Y,
                        opacity: Modifyvignette4O
                    });
                    Modifyvignette5Y = (limitebas - M) / (m) * (m / 2);
                    Modifyvignette5Y = Modifyvignette5Y.toFixed(2);
                    Modifyvignette5O = (limitebas - M) / (m / 4);
                    Modifyvignette5O = Modifyvignette5O.toFixed(2);
                    TweenLite.set(bi, {
                        y: -Modifyvignette5Y,
                        opacity: Modifyvignette5O
                    })
                }
                ;
                if (posscrollV != 0) {
                    ScrollValeurs()
                }
                $(window).addEvent("scroll", ScrollValeurs);
                
            }
            if ($("contenurea") != null && $("contenurea") != undefined) {
                if ($("actus") != null && $("actus") != undefined) {
                    var y = 0
                } else {
                    var y = 1
                }
                var aH = new TimelineLite();
                var aS = $("contenurea");
                var v = $$("#listeProjets a");
                var bw = $$(".colG a");
                var bx = $$(".colD a");
                var al = $$("#listeProjets a i");
                var a8 = $$("#listeProjets a .desc span");
                if (y == 1) {
                    var bf = $$("#listeProjets a .desc b")
                }
                var ay = $$("#listeProjets a .desc");
                for (j = 0; j < v.length; j++) {
                    var ar = $(a8[j]).getSize().y;
                    $(ay[j]).setStyles({
                        bottom: -ar / 2 + "px",
                        height: ar + "px",
                        overflow: "hidden"
                    });
                    if (y == 1) {
                        $(bf[j]).setStyles({
                            height: ar + "px"
                        })
                    }
                    var ae = new Element("span.bordH");
                    $(v[j]).grab(ae);
                    var an = new Element("span.bordB");
                    $(v[j]).grab(an);
                    var ag = new Element("span.bordG");
                    $(v[j]).grab(ag);
                    var ai = new Element("span.bordD");
                    $(v[j]).grab(ai)
                }
                aH.set(al, {
                    opacity: 0.5
                });
                aH.to(aS, 3, {
                    autoAlpha: 1
                }, 0.1);
                aH.staggerFrom(bw, 0.8, {
                    y: 130,
                    autoAlpha: 0
                }, 0.3, "-=2.5");
                aH.staggerFrom(bx, 0.8, {
                    y: 130,
                    autoAlpha: 0
                }, 0.3, "-=2.7");
                for (i = 0; i < v.length; i++) {
                    $(v[i]).addEvent("mouseenter", function() {
                        var bL = $(this).getChildren(".bordG");
                        var bO = $(this).getChildren(".bordB");
                        var bM = $(this).getChildren(".bordD");
                        var bJ = $(this).getChildren(".bordH");
                        TweenLite.to(bL[0], 0.4, {
                            width: 7
                        });
                        TweenLite.to(bM[0], 0.4, {
                            width: 7
                        });
                        TweenLite.to(bJ[0], 0.4, {
                            height: 7
                        });
                        TweenLite.to(bO[0], 0.4, {
                            height: 7
                        });
                        var bK = $(this).getChildren(".contimg img");
                        TweenLite.to(bK[0], 1, {
                            scaleX: 1.1,
                            scaleY: 1.1,
                            rotationZ: 0,
                            force3D: false
                        });
                        var bI = $(this).getChildren(".desc span");
                        if (y == 1) {
                            var Z = $(bI[0]).getSize().y;
                            TweenLite.to(bI[0], 0.5, {
                                y: -Z
                            });
                            var bN = $(this).getChildren(".desc b");
                            TweenLite.to(bN[0], 0.5, {
                                y: -Z
                            })
                        } else {
                            TweenLite.to(bI[0], 0.8, {
                                backgroundColor: "#292a3f",
                                color: "#ffffff"
                            })
                        }
                    });
                    $(v[i]).addEvent("mouseleave", function() {
                        var bK = $(this).getChildren(".bordG");
                        var bN = $(this).getChildren(".bordB");
                        var bL = $(this).getChildren(".bordD");
                        var bI = $(this).getChildren(".bordH");
                        TweenLite.to(bK[0], 0.4, {
                            width: 0
                        });
                        TweenLite.to(bL[0], 0.4, {
                            width: 0
                        });
                        TweenLite.to(bI[0], 0.4, {
                            height: 0
                        });
                        TweenLite.to(bN[0], 0.4, {
                            height: 0
                        });
                        var bJ = $(this).getChildren(".contimg img");
                        TweenLite.to(bJ[0], 0.9, {
                            scaleX: 1,
                            scaleY: 1,
                            rotationZ: 0,
                            force3D: false
                        });
                        var Z = $(this).getChildren(".desc span");
                        if (y == 1) {
                            TweenLite.to(Z[0], 0.5, {
                                y: 0
                            });
                            var bM = $(this).getChildren(".desc b");
                            TweenLite.to(bM[0], 0.5, {
                                y: 0
                            })
                        } else {
                            TweenLite.to(Z[0], 0.8, {
                                backgroundColor: "#ffffff",
                                color: "#3f3f3f"
                            })
                        }
                    })
                }
            }
            if ($("contenuprojet") != null && $("contenuprojet") != undefined) {
                var aB = new TimelineLite();
                var aY = $("contenuprojet");
                var aQ = $$(".grande img")[0];
                var bB = $("flecheProjet");
                aB.to(aY, 3, {
                    autoAlpha: 1
                }, 0.1);
                aB.from(aQ, 1.6, {
                    scaleX: 1.3,
                    scaleY: 1.3,
                    rotationZ: 0,
                    force3D: false
                }, 0.2);
                aB.from(bB, 0.6, {
                    y: -50,
                    opacity: 0
                }, 0.6);
                (function() {
                    var Z = $$("#intprojet h2")[0].getPosition().y;
                    $(bB).addEvent("click", function() {
                        TweenLite.to(window, 1, {
                            scrollTo: {
                                y: Z
                            }
                        })
                    });
                    $(bB).addEvent("mouseenter", function() {
                        TweenLite.to(bB, 0.6, {
                            opacity: 0.4,
                            scaleX: 0.8,
                            scaleY: 0.8,
                            ease: Power4.easeOut
                        })
                    });
                    $(bB).addEvent("mouseleave", function() {
                        TweenLite.to(bB, 0.5, {
                            opacity: 1,
                            scaleX: 1,
                            scaleY: 1,
                            ease: Power4.easeOut
                        })
                    })
                }
                ).delay(700);
                var B = $$("#intprojet img");
                posIMGprojet = [];
                ModifyvignetteO = [];
                posscroll = ($(window).getScroll().y).toInt();
                ScrollIMG = function() {
                    posscroll = ($(this).getScroll().y).toInt();
                    limitebas = posscroll + m;
                    for (i = 1; i < B.length; i++) {
                        posIMGprojet[i] = $(B[i]).getPosition().y.toFixed(2);
                        ModifyvignetteO[i] = (limitebas - posIMGprojet[i]) / (m / 2);
                        ModifyvignetteO[i] = ModifyvignetteO[i].toFixed(2);
                        TweenLite.set(B[i], {
                            opacity: ModifyvignetteO[i]
                        })
                    }
                }
                ;
                ScrollIMG();
                $(window).addEvent("scroll", ScrollIMG);
                var a2 = $("suiv");
                var aF = $("prec");
                var a4 = $(a2).getSize().y;
                $(a2).addEvent("mouseenter", function() {
                    var bI = $(this).getChildren("i");
                    TweenLite.to(bI[0], 0.4, {
                        y: -a4
                    });
                    var Z = $(this).getChildren("span");
                    TweenLite.to(Z, 0.4, {
                        backgroundPosition: "95% 50%"
                    })
                });
                $(a2).addEvent("mouseleave", function() {
                    var bI = $(this).getChildren("i");
                    TweenLite.to(bI[0], 0.4, {
                        y: 0
                    });
                    var Z = $(this).getChildren("span");
                    TweenLite.to(Z, 0.4, {
                        backgroundPosition: "90% 50%"
                    })
                });
                $(aF).addEvent("mouseenter", function() {
                    var bI = $(this).getChildren("i");
                    TweenLite.to(bI[0], 0.4, {
                        y: -a4
                    });
                    var Z = $(this).getChildren("span");
                    TweenLite.to(Z, 0.4, {
                        backgroundPosition: "5% 50%"
                    })
                });
                $(aF).addEvent("mouseleave", function() {
                    var bI = $(this).getChildren("i");
                    TweenLite.to(bI[0], 0.4, {
                        y: 0
                    });
                    var Z = $(this).getChildren("span");
                    TweenLite.to(Z, 0.4, {
                        backgroundPosition: "10% 50%"
                    })
                })
            }
            if ($("contenushow") != null && $("contenushow") != undefined) {
                var bp = new TimelineLite();
                var aY = $("contenushow");
                var aQ = $$(".introshow img")[0];
                var a6 = $$("#contenushow h1 i")[0];
                bp.to(contenushow, 3, {
                    autoAlpha: 1
                }, 0.1);
                bp.from(aQ, 1.6, {
                    scaleX: 1.3,
                    scaleY: 1.3,
                    rotationZ: 0,
                    force3D: false
                }, 0.2);
                bp.from(a6, 0.9, {
                    opacity: 0,
                    width: 0,
                    ease: Power4.easeOut
                }, 0.3);
                if ($("acces") != null && $("acces") != undefined) {
                    var aD = $$("#acces a")[0];
                    $(aD).addEvent("mouseenter", function() {
                        TweenLite.to(this, 0.4, {
                            borderWidth: 4,
                            borderColor: "#000",
                            color: "#85513f"
                        })
                    });
                    $(aD).addEvent("mouseleave", function() {
                        TweenLite.to(this, 0.4, {
                            borderWidth: 1,
                            borderColor: "#9697a0",
                            color: "#000"
                        })
                    })
                }
                if ($("galerieshow") != null && $("galerieshow") != undefined) {
                    var am = $("col1").getStyle("margin-left").toInt();
                    var bo = $$("#galerieshow a");
                    for (i = 0; i < bo.length; i++) {
                        $(bo[i]).setStyle("margin-top", am * 2 + "px");
                        $(bo[i]).addEvent("mouseenter", function() {
                            var Z = $(this).getChildren("img");
                            TweenLite.to(Z[0], 1.2, {
                                scaleX: 1.15,
                                scaleY: 1.15,
                                rotationZ: 0,
                                force3D: false
                            })
                        });
                        $(bo[i]).addEvent("mouseleave", function() {
                            var Z = $(this).getChildren("img");
                            TweenLite.to(Z[0], 0.9, {
                                scaleX: 1,
                                scaleY: 1,
                                rotationZ: 0,
                                force3D: false
                            })
                        })
                    }
                    var B = $$("#galerieshow img");
                    posIMGprojet = [];
                    ModifyvignetteO = [];
                    posscroll = ($(window).getScroll().y).toInt();
                    ScrollIMG = function() {
                        posscroll = ($(this).getScroll().y).toInt();
                        limitebas = posscroll + m;
                        for (i = 0; i < B.length; i++) {
                            posIMGprojet[i] = $(B[i]).getPosition().y.toFixed(2);
                            ModifyvignetteO[i] = (limitebas - posIMGprojet[i]) / (m / 2);
                            ModifyvignetteO[i] = ModifyvignetteO[i].toFixed(2);
                            TweenLite.set(B[i], {
                                opacity: ModifyvignetteO[i]
                            })
                        }
                    }
                    ;
                    ScrollIMG();
                    $(window).addEvent("scroll", ScrollIMG);
                    if ($("photozoom") != null && $("photozoom") != undefined) {
                        var aG = $("zoomsuiv");
                        var u = $("zoomprec");
                        var aN = -1;
                        var x = $("NbMax").innerHTML - 1;
                        var aL = $("photozoom");
                        var E = $("zoom");
                        var a7 = $("retour");
                        var D = $$("#galerieshow a");
                        NbreMax = D.length;
                        for (i = 0; i < NbreMax; i++) {
                            $(D[i]).addEvent("click", function() {
                                r("zoomsuiv", 800, 0);
                                r("zoomprec", 800, 0);
                                r("retour", 800, 0);
                                $(aL).setStyles({
                                    opacity: "0",
                                    display: "block"
                                });
                                r("zoom", 800, 0);
                                num = ($(this).get("id")).substring(1);
                                num = parseInt(num);
                                aN = num - 1;
                                aq();
                                $(aL).addEvent("click", aq);
                                return false
                            })
                        }
                        $(a7).addEvent("click", function() {
                            $(E).setStyle("display", "none");
                            $(aG).setStyle("display", "none");
                            $(u).setStyle("display", "none");
                            $(a7).setStyle("display", "none");
                            $(aL).setStyle("display", "none")
                        });
                        $(u).addEvent("mouseenter", function() {
                            $(this).fade(0.2)
                        });
                        $(u).addEvent("mouseleave", function() {
                            $(this).fade(1)
                        });
                        $(aG).addEvent("mouseenter", function() {
                            $(this).fade(0.2)
                        });
                        $(aG).addEvent("mouseleave", function() {
                            $(this).fade(1)
                        });
                        var K = $(window).getSize().x - 20;
                        var H = $(window).getSize().y - 20;
                        var au = K / H;
                        var ab = function(bJ) {
                            var bL = $("photozoom");
                            $(bL).setStyle("width", "auto");
                            $(bL).setStyle("height", "auto");
                            var Z = $(bL).getSize().x;
                            var bK = $(bL).getSize().y;
                            $(bL).setStyle("margin-left", -(Z / 2) + "px");
                            var bI = Z / bK;
                            if (bI > au) {
                                if (K < Z) {
                                    $(bL).setStyle("width", K + "px");
                                    $(bL).setStyle("height", K / bI + "px");
                                    $(bL).setStyle("margin-left", -(K / 2) + "px");
                                    $(bL).setStyle("margin-top", -((K / bI) / 2) + "px")
                                }
                            } else {
                                if (H < bK) {
                                    $(bL).setStyle("height", H + "px");
                                    $(bL).setStyle("width", H * bI + "px");
                                    $(bL).setStyle("margin-left", -((H * bI) / 2) + "px");
                                    $(bL).setStyle("margin-top", -(H / 2) + "px")
                                }
                            }
                        };
                        var bt = function(bI) {
                            var Z = Asset.images(bI, {
                                onComplete: function() {
                                    $(aL).src = bI;
                                    (function() {
                                        ab("photozoom");
                                        $(aL).fade(1)
                                    }
                                    ).delay(200)
                                }
                            })
                        };
                        var aq = function() {
                            if (NbreMax - 1 > aN) {
                                aN++
                            } else {
                                aN = 0
                            }
                            $(aL).setStyle("opacity", "0");
                            var Z = $(D[aN]).get("href");
                            bt(Z)
                        };
                        var bl = function() {
                            if (aN > 0) {
                                aN--
                            } else {
                                aN = NbreMax - 1
                            }
                            $(aL).setStyle("opacity", "0");
                            var Z = $(D[aN]).get("href");
                            bt(Z)
                        };
                        $(aG).addEvent("click", aq);
                        $(aL).addEvent("click", aq);
                        $(u).addEvent("click", bl)
                    }
                }
            }
            if ($("contenudem") != null && $("contenudem") != undefined) {
                var bq = new TimelineLite();
                var bz = $("contenudem");
                var C = $("intdem2");
                var ac = $$("#contenudem h1")[0];
                var aa = $$("#contenudem h2")[0];
                var L = $$("#contenudem p")[0];
                var bE = $$("#demphotos1 img");
                var bu = $$("#demphotos1 i");
                var bg = $$("#demphotos1 span");
                bq.to(bz, 3, {
                    autoAlpha: 1
                }, 0.1);
                bq.from(ac, 0.5, {
                    opacity: 0,
                    y: 50
                }, 0.2);
                bq.from(aa, 0.55, {
                    opacity: 0,
                    y: 60
                }, 0.3);
                bq.from(L, 0.6, {
                    opacity: 0,
                    y: 80
                }, 0.4);
                bq.staggerFrom(bE, 0.8, {
                    y: 80,
                    autoAlpha: 0
                }, 0.05, 0.5);
                bq.from(bu, 1.2, {
                    opacity: 0,
                    y: 250
                }, 0.6);
                bq.from(bg, 0.6, {
                    opacity: 0,
                    y: -40
                }, 0.8);
                bq.from(C, 0.6, {
                    opacity: 0,
                    y: 80
                }, 1.2);
                var B = $$("#intdem img");
                posIMGprojet = [];
                ModifyvignetteO = [];
                var P = $$("#intdem h2");
                posh2projet = [];
                Modifyh2O = [];
                var aV = $$("#intdem p");
                pospprojet = [];
                ModifypO = [];
                posscroll = ($(window).getScroll().y).toInt();
                ScrollIMG = function() {
                    posscroll = ($(this).getScroll().y).toInt();
                    limitebas = posscroll + m;
                    for (i = 3; i < B.length; i++) {
                        posIMGprojet[i] = $(B[i]).getPosition().y.toFixed(2);
                        ModifyvignetteO[i] = (limitebas - posIMGprojet[i]) / (m / 2.5);
                        ModifyvignetteO[i] = ModifyvignetteO[i].toFixed(2);
                        TweenLite.set(B[i], {
                            opacity: ModifyvignetteO[i]
                        })
                    }
                    for (i = 1; i < P.length; i++) {
                        posh2projet[i] = $(P[i]).getPosition().y.toFixed(2);
                        Modifyh2O[i] = (limitebas - posh2projet[i]) / (m / 2.5);
                        Modifyh2O[i] = Modifyh2O[i].toFixed(2);
                        TweenLite.set(P[i], {
                            opacity: Modifyh2O[i]
                        })
                    }
                    for (i = 1; i < aV.length; i++) {
                        pospprojet[i] = $(aV[i]).getPosition().y.toFixed(2);
                        ModifypO[i] = (limitebas - pospprojet[i]) / (m / 2.5);
                        ModifypO[i] = ModifypO[i].toFixed(2);
                        TweenLite.set(aV[i], {
                            opacity: ModifypO[i]
                        })
                    }
                }
                ;
                ScrollIMG();
                $(window).addEvent("scroll", ScrollIMG)
            }
            if ($("contenucont") != null && $("contenucont") != undefined) {
                var aA = new TimelineLite();
                var ad = $("contenucont");
                var aX = $$("#contenucont h1")[0];
                var aZ = $$("#contactG div");
                aA.to(ad, 3, {
                    autoAlpha: 1
                }, 0.1);
                aA.from(aX, 0.5, {
                    opacity: 0,
                    y: 50
                }, 0.2);
                aA.staggerFrom(aZ, 0.8, {
                    y: 80,
                    autoAlpha: 0
                }, 0.05, 0.25);
                (function() {
                    var Z = document.id("formulaire");
                    Z.getElements("[type=text], textarea").each(function(bI) {
                        new OverText(bI)
                    })
                }
                ).delay(10);
                var bD = $("envoyer");
                $(bD).addEvent("mouseenter", function() {
                    TweenLite.to(this, 0.4, {
                        backgroundPosition: "35px 50%",
                        color: "#555779"
                    })
                });
                $(bD).addEvent("mouseleave", function() {
                    TweenLite.to(this, 0.4, {
                        backgroundPosition: "25px 50%",
                        color: "#292a3f"
                    })
                });
                if ($("message-requete") != null && $("message-requete") != undefined) {
                    var aK = $("message-requete");
                    var aP = $("fondmessage");
                    TweenLite.set(aP, {
                        opacity: 0,
                        display: "block"
                    });
                    TweenLite.set(aK, {
                        opacity: 0,
                        display: "block",
                        y: 80
                    });
                    TweenLite.to(aP, 1, {
                        opacity: 0.7
                    });
                    TweenLite.to(aK, 0.7, {
                        opacity: 1,
                        y: 0,
                        delay: 0.4
                    });
                    $(aK).addEvent("click", function() {
                        TweenLite.to(aP, 1, {
                            autoAlpha: 0
                        }, 0.1);
                        TweenLite.to(aK, 1, {
                            autoAlpha: 0
                        }, 0.1)
                    })
                }
            }
        }
        if (l == "oui") {
            var t = $("logoB");
            var J = $$("#logoB img")[0];
            var G = $$("#logoB img")[1];
            var w = $(t).getSize().y;
            var af = $(t).getSize().x;
            var by = new TimelineLite();
            by.set(t, {
                visibility: "visible"
            }).from(J, 0.9, {
                y: w + 4,
                rotationZ: 0,
                force3D: false,
                ease: Power4.easeInOut
            }, 0.1).from(G, 0.95, {
                y: w + 4,
                rotationZ: 0,
                force3D: false,
                ease: Power4.easeInOut
            }, 0.2);
            var bC = new TimelineLite();
            var aw = $("menuext");
            var U = $("menu");
            var ak = $$("#menu i");
            bC.set(aw, {
                visibility: "visible"
            }).from(U, 0.8, {
                y: 40,
                opacity: 0,
                ease: Power3.easeOut
            }, 0.8).staggerFrom(ak, 0.6, {
                y: 20,
                opacity: 0,
                ease: Power4.easeOut
            }, 0.03, 1);
            var N = $("navigation");
            var T = $("navint");
            var aU = $$("#navint a");
            var I = new TimelineLite();
            I.set(aU, {
                y: 50,
                opacity: 0
            });
            clicnav = 0;
            clicnavouvert = "oui";
            $(aw).addEvent("click", function() {
                if (clicnav == 0 && clicnavouvert == "oui") {
                    clicnav = 1;
                    clicnavouvert = "non";
                    I.set(navigation, {
                        display: "block",
                        opacity: 0
                    });
                    I.to(navigation, 1, {
                        opacity: 1
                    }).staggerTo(aU, 1, {
                        y: 0,
                        opacity: 1,
                        ease: Power4.easeOut
                    }, 0.05, "-=0.8");
                    largeurMenui = $(ak[0]).getSize().x;
                    TweenLite.to(ak[0], 0.6, {
                        width: 0
                    });
                    TweenLite.to(ak[1], 0.9, {
                        rotation: 90
                    });
                    TweenLite.to(ak[2], 0.6, {
                        width: 0
                    });
                    TweenLite.to(U, 0.6, {
                        backgroundColor: "#85513f"
                    });
                    setTimeout(function() {
                        clicnavouvert = "oui"
                    }, 1050)
                }
                if (clicnav == 1 && clicnavouvert == "oui") {
                    clicnav = 0;
                    clicnavouvert = "non";
                    I.staggerTo(aU, 0.7, {
                        y: 30,
                        opacity: 0,
                        ease: Power4.easeOut
                    }, 0.04).to(navigation, 0.8, {
                        opacity: 0
                    }, "-=0.8");
                    TweenLite.to(ak[0], 0.4, {
                        width: largeurMenui
                    });
                    TweenLite.to(ak[1], 0.5, {
                        rotation: 0
                    });
                    TweenLite.to(ak[2], 0.4, {
                        width: largeurMenui
                    });
                    TweenLite.to(U, 0.6, {
                        backgroundColor: "#000000"
                    });
                    setTimeout(function() {
                        I.set(navigation, {
                            display: "none"
                        });
                        clicnavouvert = "oui"
                    }, 1050)
                }
            });
            var aR = $$("#sociaux a");
            TweenLite.to(aR, 0.6, {
                autoAlpha: 1,
                delay: 1.4
            });
            if ($("galerieAccueil") != null && $("galerieAccueil") != undefined) {
                var be = new TimelineLite();
                var bA = $$("#galerieAccueil img");
                be.staggerFrom(bA, 0.7, {
                    y: 70,
                    autoAlpha: 0,
                    ease: Power4.easeOut
                }, 0.1, 0.5);
                var aO = $("intro");
                TweenLite.to(aO, 0.6, {
                    autoAlpha: 1,
                    delay: 1.4
                });
                var aM = $("contenu");
                TweenLite.to(aM, 0.6, {
                    autoAlpha: 1,
                    delay: 1.6
                });
                var bd = $$("#projetsAccueil li a b");
                TweenLite.to(bd, 0.6, {
                    autoAlpha: 1,
                    delay: 1.7
                })
            }
            if ($("contenurea") != null && $("contenurea") != undefined) {
                var aH = new TimelineLite();
                var aS = $("contenurea");
                var bw = $$(".colG a");
                var bx = $$(".colD a");
                aH.to(aS, 3, {
                    autoAlpha: 1
                }, 0.1);
                aH.staggerFrom(bw, 0.8, {
                    y: 130,
                    autoAlpha: 0
                }, 0.3, "-=2.5");
                aH.staggerFrom(bx, 0.8, {
                    y: 130,
                    autoAlpha: 0
                }, 0.3, "-=2.3");
                var aC = $$("#contenurea h1 i")[0];
                TweenLite.to(aC, 0.5, {
                    width: 60,
                    marginLeft: -30,
                    delay: 0.7
                })
            }
            if ($("contenuprojet") != null && $("contenuprojet") != undefined) {
                var aB = new TimelineLite();
                var aY = $("contenuprojet");
                var aQ = $$(".grande img")[0];
                aB.to(aY, 3, {
                    autoAlpha: 1
                }, 0.1);
                aB.from(aQ, 1.6, {
                    scaleX: 1.4,
                    scaleY: 1.4,
                    rotationZ: 0,
                    force3D: false
                }, 0.2);
                var a6 = $("traitProj");
                TweenLite.from(a6, 0.5, {
                    width: 0,
                    delay: 0.7
                });
                var B = $$("#intprojet img");
                posIMGprojet = [];
                ModifyvignetteO = [];
                posscroll = ($(window).getScroll().y).toInt();
                ScrollIMG = function() {
                    posscroll = ($(this).getScroll().y).toInt();
                    limitebas = posscroll + m;
                    for (i = 1; i < B.length; i++) {
                        posIMGprojet[i] = $(B[i]).getPosition().y.toFixed(2);
                        ModifyvignetteO[i] = (limitebas - posIMGprojet[i]) / (m / 2);
                        ModifyvignetteO[i] = ModifyvignetteO[i].toFixed(2);
                        TweenLite.set(B[i], {
                            opacity: ModifyvignetteO[i]
                        })
                    }
                }
                ;
                ScrollIMG();
                $(window).addEvent("scroll", ScrollIMG)
            }
            if ($("contenushow") != null && $("contenushow") != undefined) {
                var bp = new TimelineLite();
                var aY = $("contenushow");
                var aQ = $$(".introshow img")[0];
                var a6 = $$("#contenushow h1 i")[0];
                bp.to(contenushow, 3, {
                    autoAlpha: 1
                }, 0.1);
                bp.from(aQ, 1.6, {
                    scaleX: 1.3,
                    scaleY: 1.3,
                    rotationZ: 0,
                    force3D: false
                }, 0.2);
                bp.from(a6, 0.9, {
                    opacity: 0,
                    width: 0,
                    ease: Power4.easeOut
                }, 0.3);
                var B = $$("#galerieshow img");
                posIMGprojet = [];
                ModifyvignetteO = [];
                posscroll = ($(window).getScroll().y).toInt();
                ScrollIMG = function() {
                    posscroll = ($(this).getScroll().y).toInt();
                    limitebas = posscroll + m;
                    for (i = 0; i < B.length; i++) {
                        posIMGprojet[i] = $(B[i]).getPosition().y.toFixed(2);
                        ModifyvignetteO[i] = (limitebas - posIMGprojet[i]) / (m / 2);
                        ModifyvignetteO[i] = ModifyvignetteO[i].toFixed(2);
                        TweenLite.set(B[i], {
                            opacity: ModifyvignetteO[i]
                        })
                    }
                }
                ;
                ScrollIMG();
                $(window).addEvent("scroll", ScrollIMG);
                if ($("photozoom") != null && $("photozoom") != undefined) {
                    var D = $$("#galerieshow a");
                    NbreMax = D.length;
                    for (i = 0; i < NbreMax; i++) {
                        $(D[i]).addEvent("click", function() {
                            return false
                        })
                    }
                }
            }
            if ($("contenudem") != null && $("contenudem") != undefined) {
                var bq = new TimelineLite();
                var bz = $("contenudem");
                var C = $("intdem2");
                var ac = $$("#contenudem h1")[0];
                var aa = $$("#contenudem h2")[0];
                var L = $$("#contenudem p")[0];
                var bE = $$("#demphotos1 img");
                var bu = $$("#demphotos1 i");
                var bg = $$("#demphotos1 span");
                bq.to(bz, 3, {
                    autoAlpha: 1
                }, 0.1);
                bq.from(ac, 0.5, {
                    opacity: 0,
                    y: 50
                }, 0.2);
                bq.from(aa, 0.55, {
                    opacity: 0,
                    y: 60
                }, 0.3);
                bq.from(L, 0.6, {
                    opacity: 0,
                    y: 80
                }, 0.4);
                bq.staggerFrom(bE, 0.8, {
                    y: 80,
                    autoAlpha: 0
                }, 0.05, 0.5);
                bq.from(bu, 1.2, {
                    opacity: 0,
                    y: 250
                }, 0.6);
                bq.from(bg, 0.6, {
                    opacity: 0,
                    y: -40
                }, 0.8);
                bq.from(C, 0.6, {
                    opacity: 0,
                    y: 80
                }, 1.2)
            }
            if ($("contenucont") != null && $("contenucont") != undefined) {
                var aA = new TimelineLite();
                var ad = $("contenucont");
                var aX = $$("#contenucont h1")[0];
                var aZ = $$("#contactG div");
                aA.to(ad, 3, {
                    autoAlpha: 1
                }, 0.1);
                aA.from(aX, 0.5, {
                    opacity: 0,
                    y: 50
                }, 0.2);
                aA.staggerFrom(aZ, 0.8, {
                    y: 80,
                    autoAlpha: 0
                }, 0.05, 0.25);
                (function() {
                    var Z = document.id("formulaire");
                    Z.getElements("[type=text], textarea").each(function(bI) {
                        new OverText(bI)
                    })
                }
                ).delay(10);
                if ($("message-requete") != null && $("message-requete") != undefined) {
                    var aK = $("message-requete");
                    var aP = $("fondmessage");
                    TweenLite.set(aP, {
                        opacity: 0,
                        display: "block"
                    });
                    TweenLite.set(aK, {
                        opacity: 0,
                        display: "block",
                        y: 80
                    });
                    TweenLite.to(aP, 1, {
                        opacity: 0.7
                    });
                    TweenLite.to(aK, 0.7, {
                        opacity: 1,
                        y: 0,
                        delay: 0.4
                    });
                    $(aK).addEvent("click", function() {
                        TweenLite.to(aP, 1, {
                            autoAlpha: 0
                        }, 0.1);
                        TweenLite.to(aK, 1, {
                            autoAlpha: 0
                        }, 0.1)
                    })
                }
            }
        }
    }
    ).delay(100)
}
describe('score_to_grade_spec',function(){
    var score = [59,69,79,89,99];
    /* common*/
    it("change score to be D", function() {
        var result = scoreToGrade(30);
        expect(result).toEqual('D');
    });
    it("change score to be C", function() {
        var result = scoreToGrade(65);
        expect(result).toEqual('C');
    });
    it("change score to be B", function() {
        var result = scoreToGrade(75);
        expect(result).toEqual('B');
    });
    it("change score to be A", function() {
        var result = scoreToGrade(85);
        expect(result).toEqual('A');
    });
    it("change score to be S", function() {
        var result = scoreToGrade(95);
        expect(result).toEqual('S');
    });

    /* top border*/
    it("change score to be D", function() {
        var result = scoreToGrade(59);
        expect(result).toEqual('D');
    });
    it("change score to be C", function() {
        var result = scoreToGrade(69);
        expect(result).toEqual('C');
    });
    it("change score to be B", function() {
        var result = scoreToGrade(79);
        expect(result).toEqual('B');
    });
    it("change score to be A", function() {
        var result = scoreToGrade(89);
        expect(result).toEqual('A');
    });
    it("change score to be", function() {
        var result = scoreToGrade(99);
        expect(result).toEqual('S');
    });

    /* bottom border*/
    it("change score to be D", function() {
        var result = scoreToGrade(0);
        expect(result).toEqual('D');
    });
    it("change score to be C", function() {
        var result = scoreToGrade(60);
        expect(result).toEqual('C');
    });
    it("change score to be B", function() {
        var result = scoreToGrade(70);
        expect(result).toEqual('B');
    });
    it("change score to be A", function() {
        var result = scoreToGrade(80);
        expect(result).toEqual('A');
    });
    it("change score to be S", function() {
        var result = scoreToGrade(90);
        expect(result).toEqual('S');
    });

    /*wrong score */
    it("wrong score", function() {
        expect(function(){scoreToGrade(101);}).toThrow();
    });
});

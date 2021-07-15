package seeuthere.goodday.member.domain;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import seeuthere.goodday.auth.dto.ProfileDto;
import seeuthere.goodday.member.service.MemberService;

import static org.assertj.core.api.Assertions.assertThat;


@DisplayName("멤버 관리를 한다.")
@SpringBootTest
class MemberTest {

    @Autowired
    private MemberService service;

    @DisplayName("첫 로그인시 멤버를 저장한다.")
    @Test
    @Transactional
    public void firstLoginSave() {
        ProfileDto profile = new ProfileDto("12345", "영범허", "imageLink");
        Member member = service.add(profile);
        assertThat(service.find("12345").get()).isEqualTo(member);
    }

    @DisplayName("첫 로그인이 아닐 시 멤버를 저장하지 않는다.")
    @Test
    public void alreadyMemberNotSave() {
        ProfileDto profile = new ProfileDto("12345", "영범허", "imageLink");
        service.add(profile);
        Member member = service.add(profile);
        assertThat(member).isNull();
    }
}
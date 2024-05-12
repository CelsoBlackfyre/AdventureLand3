import {
	Button,
	Form,
	FormControl,
	Container,
	Row,
	Col,
} from "react-bootstrap";
import "./Custom.css";

function Sobre() {
	return (
		<section className="py-5">
			<Container>
				<Row>
					<Col md={5}>
						<span className="text-muted text-white-50">私たちの物語</span>
						<h2 className="display-5 fw-bold">Sobre</h2>
						<p className="lead text-white">
							Adventure Land e um parque de diversão com tematica voltada a
							cultura japonesa. Aqui ira ficar imerso em um mundo completamente
							novo e entretido de diversas maneiras possiveis.
						</p>
					</Col>
					<Col md={6} className="offset-md-1">
						<p className="lead text-white">
							Site foi criado para exercicio de aprendizagem para o curso de
							Desenvolvimento de Sistemas na materia de Desenvolvimento de
							Sistemas. A atividade demanda exercer o conhecimento obtido em
							HTML, CSS e Javascript para criacao de um site de um parque de
							diversao de acordo com seus gostos.
						</p>
						<hr className="my-4 invisible" />
						<Col className="col-md-5">
							<h4 className="text-white">Desenvolvedor</h4>
							<p className="text-white">Celso Carvalho Junior</p>
						</Col>
						<hr className="my-4 invisible" />

						<Col className="col-md-5">
							<h4 className="text-white">Contato</h4>
							<a href="mailto:0001027940@senaimgaluno.com.br">
								Email do Senai: 0001027940@senaimgaluno.com.br
							</a>
							<br />
							<a href="https://github.com/CelsoBlackfyre">
								GitHub: CelsoBlackfyre
							</a>
						</Col>
						<hr className="my-4 invisible" />
						<Col className="col-md-5">
							<h4 className="text-white">Agradecimentos</h4>
							<p className="text-white">Professor Marcel</p>
							<p className="text-white">Todos da turma menos alguns</p>
						</Col>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
export default Sobre;
